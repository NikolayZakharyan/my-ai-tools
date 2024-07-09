import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchSection = () => {
  return (
    <div className="w-full border rounded-lg flex flex-col items-center p-2 gap-2">
      <div className="p-2 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium">Browse all categories</h2>
        <p className="text-xs">If you dont you can search correct category</p>
      </div>

      <div className="flex gap-2 items-center w-full p-2">
        <SearchIcon />

        <Input placeholder="Seach by category..." />
      </div>
    </div>
  );
};

export default SearchSection;
