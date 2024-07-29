"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { _createAiTemplate } from "@/drizzle/db/schemas/ai-templates/handler";
import CreateAiTemplateModal from "../_dialog_modales/CreateAiTemplateModal";

const SearchSection = () => {
  const { user } = useUser();

  return (
    <div className="w-full border rounded-lg flex flex-col items-center p-2 gap-2">
      <div className="p-2 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium">Browse all categories</h2>
        <p className="text-xs">If you dont you can search correct category</p>
      </div>

      <div className="flex gap-2 items-center w-full p-2">
        <div className="">
          <SearchIcon />
        </div>

        <div className="w-full">
          <Input placeholder="Seach by category..." />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
