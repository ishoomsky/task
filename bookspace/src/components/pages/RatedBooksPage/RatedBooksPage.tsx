import AppPage from "../../content-containers/AppPage";
import HeaderContent from "../../content-containers/HeaderContent";
import SidebarContent from "../../content-containers/SidebarContent";
import RatedBooksPageContent from "../../content-containers/RatedBooksPageContent";

const RatedBooksPage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<RatedBooksPageContent />}
    />
  );
};

export default RatedBooksPage;
