import AppPage from "../../components/AppPage";
import HeaderContent from "../../components/HeaderContent";
import SidebarContent from "../../components/SidebarContent";
import BookPageContent from "../../components/BookPageContent";

const BookPage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<BookPageContent />}
    />
  );
};

export default BookPage;
