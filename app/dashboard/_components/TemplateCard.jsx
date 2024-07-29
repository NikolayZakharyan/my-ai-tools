"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";
import DeleteTemplateAlertDialog from "../_dialog_modales/DeleteTemplateAlertDialog";

const TemplateCard = ({ templateItem, order, resultCallback }) => {
  const [openDeleteDilalog, setopenDeleteDilalog] = useState();

  const { slug, id } = templateItem;

  return (
    <div className="bg-white hover:bg-gray-500 shadow-xl hover:shadow-none  w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="relative mt-2 mx-2">
        <div className="h-56 rounded-2xl overflow-hidden">
          <Image
            width={300}
            height={200}
            src={`https://picsum.photos/300/200?random=${templateItem.id}`}
            className="object-cover w-full h-full"
            alt={templateItem.name}
          />
        </div>
        <div
          role="presentation"
          className="bg-white rounded-full absolute top-2 right-2 opacity-0 hover:opacity-100 cursor-pointer"
          onClick={() => setopenDeleteDilalog(true)}
        >
          <X size={28} />
        </div>
      </div>

      <Link href={`/dashboard/content/${slug}-${id}`}>
        <div className="pt-4 pb-6 w-full px-4 text-center cursor-pointer">
          <h1 className="font-medium leading-none text-base tracking-wider text-primary">{`${order}. ${templateItem.name}`}</h1>
          <p className="text-gray-400 mt-2">{templateItem.description}</p>
          <p className="text-primary mt-1 text-sm">
            Category: {templateItem.aiTemplateCategory}
          </p>
          <p className="text-primary mt-1 text-sm">
            Autor: {templateItem.createdBy}
          </p>
        </div>
      </Link>

      <DeleteTemplateAlertDialog
        open={openDeleteDilalog}
        setOpen={setopenDeleteDilalog}
        templateId={id}
        resultCallback={resultCallback}
      />
    </div>
  );
};

export default TemplateCard;
