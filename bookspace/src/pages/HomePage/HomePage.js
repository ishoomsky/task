import React from 'react';
import AppPage from '../../components/AppPage';
import HeaderContent from "../../components/HeaderContent";
import RatedBooks from '../../components/RatedBooks/RatedBooks';
const HomePage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<RatedBooks />}
      articleContent
    />
  );
}

export default HomePage;
