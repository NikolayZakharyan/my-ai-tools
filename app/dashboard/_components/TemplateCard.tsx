import React from "react";
import Image from "next/image";
import { Heart, MessageSquare } from "lucide-react";
import Link from "next/link";
import { TEMPLATE } from "@/app/(data)/templates";

interface TemplateCardProps {
  templateItem: TEMPLATE;
  order: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ templateItem, order }) => {
  return (
    <Link href={`/dashboard/content/${templateItem.slug}`}>
      <div className="bg-white hover:bg-gray-500 shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
        <div className="relative mt-2 mx-2">
          <div className="h-56 rounded-2xl overflow-hidden">
            <Image
              width={300}
              height={200}
              src={templateItem.bgImage}
              className="object-cover w-full h-full"
              alt={templateItem.name}
            />
          </div>
          {/* <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
          <div className="h-10 w-10 flex items-center justify-center text-xl bg-white hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <Heart />
          </div>
          <div className="h-10 w-16 ml-2 bg-white hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out group">
            <MessageSquare />
            <span className="text-gray-800 ml-2 group-hover:text-white">
              {templateItem.likes || 0}
            </span>
          </div>
        </div> */}
        </div>
        <div className="pt-4 pb-6 w-full px-4 text-center">
          <h1 className="font-medium leading-none text-base tracking-wider text-primary">{`${order}. ${templateItem.name}`}</h1>
          <p className="text-gray-400 mt-2">{templateItem.desc}</p>
          <p className="text-primary mt-1 text-sm">
            Category: {templateItem.category}
          </p>
          {/* <p className="text-gray-500 mt-1 text-sm">
          AI Prompts: {templateItem.aiPrompts}
        </p> */}

          {/* <div className="mt-4 text-left">
          <h2 className="text-gray-500 text-sm font-semibold">Form Fields:</h2>
          {templateItem.form.map((field: FORM, index: number) => (
            <div key={index} className="mt-2">
              <label className="text-gray-600 text-sm">{field.label}:</label>
              {field.field === "input" ? (
                <input
                  type="text"
                  name={field.name}
                  required={field.required}
                  className="w-full mt-1 p-2 border rounded-md"
                />
              ) : (
                <textarea
                  name={field.name}
                  className="w-full mt-1 p-2 border rounded-md"
                />
              )}
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
