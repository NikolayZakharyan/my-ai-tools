"use client";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { _getAiTemplates } from "@/drizzle/db/schemas/ai-templates/handler";
import { useUser } from "@clerk/nextjs";
import CreateAiTemplateModal from "../_dialog_modales/CreateAiTemplateModal";

const TemplateListSection = () => {
  const [loading, setloading] = useState(true);
  const [templates, settemplates] = useState([]);

  const resultCallback = (template, action) => {
    console.log(template);

    onGetAiTemplates();
  };

  const onGetAiTemplates = () => {
    setloading(true);
    _getAiTemplates()
      .then((response) => {
        settemplates(response);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        console.log({ error });
      });
  };

  useEffect(() => {
    onGetAiTemplates();
  }, []);

  if (loading) return <>LOADING</>;

  return (
    <div>
      <div className="p-4">
        <CreateAiTemplateModal resultCallback={resultCallback} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 p-4">
        {templates.map((templateItem, i) => (
          <TemplateCard
            key={i}
            templateItem={templateItem}
            order={i + 1}
            resultCallback={resultCallback}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateListSection;
