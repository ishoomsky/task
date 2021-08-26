import AppPage from "../../content-containers/AppPage";
import HeaderContent from "../../content-containers/HeaderContent";
import SidebarContent from "../../content-containers/SidebarContent";
import HomePageContent from "../../content-containers/HomePageContent";

const HomePage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<HomePageContent />}
    />
  );
};

export default HomePage;
