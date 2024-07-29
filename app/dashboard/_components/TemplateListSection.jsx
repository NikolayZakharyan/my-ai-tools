"use client";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { _getAiTemplates } from "@/drizzle/db/schemas/ai-templates/handler";
import { useUser } from "@clerk/nextjs";

const TemplateListSection = () => {
  const [templates, settemplates] = useState([]);

  useEffect(() => {
    _getAiTemplates()
      .then((response) => {
        settemplates(response);
      })
      .catch((error) => console.log({ error }));
  }, []);





  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 p-4">
      {templates.map((templateItem, i) => (
        <TemplateCard key={i} templateItem={templateItem} order={i + 1} />
      ))}
    </div>
  );
};

export default TemplateListSection;
