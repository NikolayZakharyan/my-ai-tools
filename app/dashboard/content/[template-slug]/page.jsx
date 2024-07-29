"use client";
import React, { useEffect, useState } from "react";
import FormContentSection from "../_components/FormContentSection";
import OutputContentSection from "../_components/OutputContentSection";
import { TEMPLATE, getTemplateBySlug, SlugEnum } from "@/app/(data)/templates";
import { chatSession } from "@/utils/AiModul";
import { _createAiOutput } from "@/drizzle/db/schemas/ai-output/handler";
import { _getTemplateById } from "@/drizzle/db/schemas/ai-templates/handler";

const ContentPage = ({ params }) => {
  const [aiResultloading, setaiResultLoading] = useState(false);
  const [aiResultString, setaiResultString] = useState("");
  const [selectedTemplate, setselectedTemplate] = useState(null);

  const [loading, setloading] = useState(true);

  const templateSlug = Object.values(params)[0];
  const templateId = templateSlug.split("-").slice(-1)[0];

  const onGetAiTemplateById = async () => {
    setloading(true);
    const res = await _getTemplateById(templateId);
    setselectedTemplate(res[0]);
    setloading(false);
    return res[0];
  };

  useEffect(() => {
    onGetAiTemplateById();
  }, []);

  console.log(selectedTemplate);

  const onGenerateAIContent = async (formData) => {
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

  if (loading) return <>LOADING ...</>;

  if (!selectedTemplate) return <>SOMTHING GET WRONG: {templateSlug}</>;

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
