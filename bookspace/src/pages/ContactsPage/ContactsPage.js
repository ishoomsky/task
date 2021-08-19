import React from "react";
import AppPage from "../../components/AppPage";
import HeaderContent from "../../components/HeaderContent";
import SidebarContent from "../../components/SidebarContent";
import FeedbackForm from "../../components/FeedbackForm";

const ContactsPage = () => {
  return (
    <AppPage
      headerContent={<HeaderContent />}
      sidebarContent={<SidebarContent />}
      articleContent={<FeedbackForm />}
    />
  );
};

export default ContactsPage;
