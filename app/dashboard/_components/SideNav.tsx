import { History, Home, Settings, WalletIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashborad/home",
    },
    {
      name: "History",
      icon: History,
      path: "/dashborad/history",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashborad/setting",
    },
    {
      name: "Billing",
      icon: WalletIcon,
      path: "/dashborad/billing",
    },
  ];

  return (
    <div className="w-64 border p-2 h-screen shadow-sm">
      <div className="border flex justify-center p-1">
        <Image src={"/logo.svg"} alt="logo" width="100" height="40" />
      </div>
      <div className="flex flex-col gap-4 pt-10 items-center">
        {menuList.map((item, i) => {
          return (
            <div className="flex gap-2 border w-full p-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white ">
              <div>
                <item.icon />
              </div>
              <div>
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
