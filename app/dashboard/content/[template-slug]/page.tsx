import React from "react";
import FormContentSection from "../_components/FormContentSection";
import OutputContentSection from "../_components/OutputContentSection";
import templates, {
  TEMPLATE,
  getTemplateBySlug,
  SlugEnum,
} from "@/app/(data)/templates";

interface ContentPageProps {
  params: Object;
}

const ContentPage: React.FC<ContentPageProps> = ({ params }) => {
  const templateSlug: SlugEnum = Object.values(params)[0];

  const selectedTemplate: TEMPLATE | undefined =
    getTemplateBySlug(templateSlug);

  if (selectedTemplate === undefined)
    return <>SOMTHING GET WRONG: {templateSlug}</>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <FormContentSection selectedTemplate={selectedTemplate} />

      <div className="col-span-2">
        <OutputContentSection />
      </div>
    </div>
  );
};

export default ContentPage;
