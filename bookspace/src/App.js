import React from "react";
import GlobalStyle from "./globalStyles";
import GlobalFonts from "./globalFonts";
import HomePage from "./pages/HomePage";
import RatedBooksPage from "./pages/RatedBooksPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <RatedBooksPage />
    </>
  );
}

export default App;
