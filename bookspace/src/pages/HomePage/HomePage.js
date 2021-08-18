import React from "react";
import AppPage from "../../components/AppPage";
import HeaderContent from "../../components/HeaderContent";
import SidebarContent from "../../components/SidebarContent";
import ArticleContent from "../../components/ArticleContent";

const HomePage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<ArticleContent />}
    />
  );
};

export default HomePage;
