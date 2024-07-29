"use client";
import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { useUser } from "@clerk/nextjs";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <>user isLoaded ....</>;

  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <div>
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
