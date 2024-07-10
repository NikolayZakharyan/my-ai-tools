import React from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashboard = () => {
  return (
    <div className="p-2">
      {/* Search section */}

      <SearchSection />

      {/* Tamplates list section */}

      <TemplateListSection />
    </div>
  );
};

export default Dashboard;
