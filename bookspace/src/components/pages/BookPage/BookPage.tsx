import AppPage from "../../content-containers/AppPage";
import HeaderContent from "../../content-containers/HeaderContent";
import SidebarContent from "../../content-containers/SidebarContent";
import BookPageContent from "../../content-containers/BookPageContent";

const BookPage:React.FC = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<BookPageContent />}
    />
  );
};

export default BookPage;
