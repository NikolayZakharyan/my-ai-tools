import React from "react";
import SearchSection from "./_components/SearchSection";
import TamplateListSection from "./_components/TamplateListSection";

const Dashboard = () => {
  return (
    <div className="p-2">
      {/* Search section */}

      <SearchSection />

      {/* Tamplates list section */}

      <TamplateListSection />
    </div>
  );
};

export default Dashboard;
