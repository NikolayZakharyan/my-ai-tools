import React from "react";
import templates from "@/app/(data)/templates";
import TemplateCard from "./TemplateCard";

export interface FORM {
  label: string;
  field: "input" | "textarea";
  name: string;
  required?: boolean;
}

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  bgImage: string;
  aiPrompts: string;
  slug: string;
  form: FORM[];
  likes?: number;
}

const TemplateListSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
      {templates.map((templateItem: TEMPLATE, i: number) => (
        <TemplateCard key={i} templateItem={templateItem} order={i + 1} />
      ))}
    </div>
  );
};

export default TemplateListSection;
