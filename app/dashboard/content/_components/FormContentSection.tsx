import React from "react";
import { TEMPLATE } from "@/app/(data)/templates";
import Image from "next/image";

interface FormContentSectionProps {
  selectedTemplate: TEMPLATE;
}

const FormContentSection: React.FC<FormContentSectionProps> = ({
  selectedTemplate,
}) => {
  return (
    <div className="border rounded-lg">
      <div>
        <Image
          src={selectedTemplate.icon}
          width={60}
          height={60}
          alt={selectedTemplate.name}
        />
      </div>

      <div>
        <h2>{selectedTemplate.name}</h2>
      </div>
    </div>
  );
};

export default FormContentSection;
