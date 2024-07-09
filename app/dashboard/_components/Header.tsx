import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="border flex items-center justify-between p-2">
      <div className="flex items-center justify-start">
        <div className="px-2">
          <SearchIcon />
        </div>

        <Input className="max-w-64" placeholder="Search " />
      </div>

      <div>
        <div className="bg-purple-600 w-40 rounded-full ">
          <h2 className="text-sm p-2 leading-3 text-white">
            You currect status
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
