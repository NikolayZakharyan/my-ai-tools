import React from "react";
import { TEMPALTE } from "./TamplateListSection";

interface TemplateCardProps {}

const TemplateCard = ({ templateItem }: TEMPALTE) => {
  console.log(templateItem);

  return <div>TemplateCard</div>;
};

export default TemplateCard;
