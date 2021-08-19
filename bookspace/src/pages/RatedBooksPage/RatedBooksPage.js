import React from "react";
import AppPage from "../../components/AppPage";
import HeaderContent from "../../components/HeaderContent";
import SidebarContent from "../../components/SidebarContent";
import RatedBooksPageContent from "../../components/RatedBooksPageContent";

const HomePage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<RatedBooksPageContent />}
    />
  );
};

export default HomePage;
