"use client";
import React, { useState } from "react";
import FormContentSection from "../_components/FormContentSection";
import OutputContentSection from "../_components/OutputContentSection";
import { TEMPLATE, getTemplateBySlug, SlugEnum } from "@/app/(data)/templates";
import { chatSession } from "@/utils/AiModul";

interface ContentPageProps {
  params: Object;
}

const ContentPage: React.FC<ContentPageProps> = ({ params }) => {
  const [aiResultloading, setaiResultLoading] = useState<boolean>(false);
  const [aiResultString, setaiResultString] = useState<string>("");

  const templateSlug: SlugEnum = Object.values(params)[0];
  const selectedTemplate: TEMPLATE | undefined =
    getTemplateBySlug(templateSlug);

  const onGenerateAIContent = async (formData: any) => {
    const templatePromps = selectedTemplate?.aiPrompts;

    const finalAiPrompt = JSON.stringify(formData) + "," + templatePromps;

    setaiResultLoading(true);

    const aiResult = await chatSession.sendMessage(finalAiPrompt);

    console.log(aiResult);

    setaiResultString(aiResult.response.text());
    setaiResultLoading(false);

    // return aiResult.response.text();
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
