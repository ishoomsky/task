import React from 'react';
import AppPage from '../../components/AppPage';
import HeaderContent from "../../components/HeaderContent";
import SidebarContent from "../../components/SidebarContent";

const HomePage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent
    />
  );
}

export default HomePage;
