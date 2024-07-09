import tamplates from "@/app/(data)/tamplates";
import React from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPALTE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompts: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TamplateListSection = () => {
  return (
    <div>
      {tamplates.map((templateItem: TEMPALTE, i: number) => {
        console.log(templateItem);

        return <TemplateCard {...templateItem} />;
      })}
    </div>
  );
};

export default TamplateListSection;
