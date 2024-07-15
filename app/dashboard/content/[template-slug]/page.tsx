"use client";
import React, { useState } from "react";
import FormContentSection from "../_components/FormContentSection";
import OutputContentSection from "../_components/OutputContentSection";
import { TEMPLATE, getTemplateBySlug, SlugEnum } from "@/app/(data)/templates";
import { chatSession } from "@/utils/AiModul";
import { useUser } from "@clerk/nextjs";
import { _createAiOutput } from "@/utils/drizzle/schemas/ai-output/handler";

interface ContentPageProps {
  params: Object;
}

const ContentPage: React.FC<ContentPageProps> = ({ params }) => {
  const [aiResultloading, setaiResultLoading] = useState<boolean>(false);
  const [aiResultString, setaiResultString] = useState<string>("");

  const { user } = useUser();

  console.log(user);

  const templateSlug: SlugEnum = Object.values(params)[0];
  const selectedTemplate: TEMPLATE | undefined =
    getTemplateBySlug(templateSlug);

  const onGenerateAIContent = async (formData: any) => {
    const templatePrompts = selectedTemplate?.aiPrompts;

    const prompt = `${JSON.stringify(formData)}, ${templatePrompts}`;

    setaiResultLoading(true);

    try {
      const aiResult = await chatSession.sendMessage(prompt);

      const result = await _createAiOutput(
        formData,
        templateSlug,
        aiResult.response.text(),
        user
      );

      setaiResultString(aiResult.response.text());
    } catch (error) {
      console.error("Error generating AI content:", error);
      // Handle the error appropriately (e.g., display an error message to the user)
    } finally {
      setaiResultLoading(false);
    }
  };

  if (selectedTemplate === undefined)
    return <>SOMTHING GET WRONG: {templateSlug}</>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <FormContentSection
        selectedTemplate={selectedTemplate}
        onGenerateAIContent={onGenerateAIContent}
        aiResultloading={aiResultloading}
      />

      <div className="col-span-2">
        <OutputContentSection aiResultString={aiResultString} />
      </div>
    </div>
  );
};

export default ContentPage;
