import AppPage from "../../content-containers/AppPage";
import HeaderContent from "../../content-containers/HeaderContent";
import SidebarContent from "../../content-containers/SidebarContent";
import ContactsPageContent from "../../content-containers/ContactsPageContent";

const ContactsPage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<ContactsPageContent />}
    />
  );
};

export default ContactsPage;
