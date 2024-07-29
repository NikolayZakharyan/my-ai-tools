import React from "react";
import Image from "next/image";
// import { Heart, MessageSquare } from "lucide-react";
import Link from "next/link";

const TemplateCard = ({ templateItem, order }) => {
  const { slug, id } = templateItem;

  return (
    <Link href={`/dashboard/content/${slug}-${id}`}>
      <div className="bg-white hover:bg-gray-500 shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
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
        </div>
        <div className="pt-4 pb-6 w-full px-4 text-center">
          <h1 className="font-medium leading-none text-base tracking-wider text-primary">{`${order}. ${templateItem.name}`}</h1>
          <p className="text-gray-400 mt-2">{templateItem.description}</p>
          <p className="text-primary mt-1 text-sm">
            Category: {templateItem.aiTemplateCategory}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
