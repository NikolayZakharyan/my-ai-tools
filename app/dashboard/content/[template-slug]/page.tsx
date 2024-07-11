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
    <div>
      <FormContentSection selectedTemplate={selectedTemplate} />
      <OutputContentSection />
    </div>
  );
};

export default ContentPage;
