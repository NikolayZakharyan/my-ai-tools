"use client";
import React, { useEffect } from "react";
import templates, { TEMPLATE } from "@/app/(data)/templates";
import TemplateCard from "./TemplateCard";
import { _getAiTemplates } from "@/drizzle/db/schemas/ai-templates/handler";

const TemplateListSection: React.FC = () => {
  console.log("first");

  const res = async () => {
    return await _getAiTemplates();
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 p-4">
      {templates.map((templateItem: TEMPLATE, i: number) => (
        <TemplateCard key={i} templateItem={templateItem} order={i + 1} />
      ))}
    </div>
  );
};

export default TemplateListSection;
