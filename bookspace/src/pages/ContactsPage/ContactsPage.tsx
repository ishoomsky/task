import AppPage from "../../components/AppPage";
import HeaderContent from "../../components/HeaderContent";
import SidebarContent from "../../components/SidebarContent";
import ContactsPageContent from "../../components/ContactsPageContent";

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
