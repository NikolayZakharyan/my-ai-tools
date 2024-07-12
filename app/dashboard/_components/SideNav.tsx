import { History, Home, Settings, WalletIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
    {
      name: "Billing",
      icon: WalletIcon,
      path: "/dashboard/billing",
    },
  ];

  return (
    <div className="w-64 border p-2 h-screen shadow-sm">
      <div className="flex justify-center p-1 pt-4">
        <Image src={"/logo.svg"} alt="logo" width="200" height="40" />
      </div>
      <div className="flex flex-col gap-4 pt-10 items-center">
        {menuList.map((item, i) => {
          return (
            <Link
              href={item.path}
              className="flex gap-2 border w-full p-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white "
            >
              <div>
                <item.icon />
              </div>
              <div>
                <h2>{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
