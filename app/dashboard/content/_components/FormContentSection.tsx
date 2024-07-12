"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FORM, TEMPLATE } from "@/app/(data)/templates";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormContentSectionProps {
  selectedTemplate: TEMPLATE;
  onGenerateAIContent: Function;
  aiResultloading: boolean;
}

const FormContentSection: React.FC<FormContentSectionProps> = ({
  selectedTemplate,
  onGenerateAIContent,
  aiResultloading,
}) => {
  const [formData, setformData] = useState({});

  const onChangeFormData = useCallback((e: any) => {
    console.log(e);
    const { name, value } = e.target;

    console.log(name, value);

    setformData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }, []);

  const onSubmit = (e: any): void | undefined => {
    e.preventDefault();

    onGenerateAIContent(formData);
  };

  return (
    <div className="border rounded-lg p-2">
      <div className="flex items-center gap-2">
        <Image
          src={selectedTemplate.icon}
          width={60}
          height={60}
          alt={"alt"}
          // className="border"
        />

        <div className="">
          <h2 className="font-medium text-2xl">{selectedTemplate.name}</h2>
          <p className="text-gray-500 text-xs">{selectedTemplate.desc}</p>
        </div>
      </div>

      {/* <div className="relative">
        <input
          type="text"
          id="disabled_filled"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          disabled
        />
        <label
          htmlFor="disabled_filled"
          className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Disabled filled
        </label>
      </div> */}

      <div className="border-b w-full pt-2"></div>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 pt-4">
          {selectedTemplate.form.map(
            ({ label, field, name, required }: FORM) => {
              switch (field) {
                case "input":
                  return (
                    <div>
                      <label className="text-xs font-medium" htmlFor={name}>
                        {label}
                      </label>
                      <Input
                        placeholder="Type your message here."
                        name={name}
                        required={required}
                        onChange={onChangeFormData}
                      />
                    </div>
                  );
                case "textarea":
                  return (
                    <div>
                      <label className="text-xs font-medium" htmlFor={name}>
                        {label}
                      </label>
                      <Textarea
                        placeholder="Type your message here."
                        name={name}
                        required={required}
                        onChange={onChangeFormData}
                        className="min-h-36"
                      />
                    </div>
                  );
                default:
                  return <>Unknow Field</>;
              }
            }
          )}
        </div>
        <div className="pt-4 w-full">
          <Button type="submit" className="w-full" disabled={aiResultloading}>
            {aiResultloading ? "Loading ..." : "Generate"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormContentSection;
