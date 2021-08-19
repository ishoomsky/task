import React from "react";
import GlobalStyle from "./globalStyles";
import GlobalFonts from "./globalFonts";
import HomePage from "./pages/HomePage";
import RatedBooksPage from "./pages/RatedBooksPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <ContactsPage />
    </>
  );
}

export default App;
