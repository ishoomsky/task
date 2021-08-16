import React from "react";
import GlobalStyle from "./globalStyles";
import GlobalFonts from './globalFonts';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts /> 
      <HomePage />
    </>
  );
}

export default App;
