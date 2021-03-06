import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import GlobalFonts from "./globalFonts";
import HomePage from "./components/pages/HomePage";
import RatedBooksPage from "./components/pages/RatedBooksPage";
import ContactsPage from "./components/pages/ContactsPage";
import BookPage from "./components/pages/BookPage";
import * as routes from "./navigation/routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Router>
        <Switch>
          <Route exact path={routes.BASE_ROUTE} component={HomePage} />
          <Route exact path={routes.RATED} component={RatedBooksPage} />
          <Route exact path={routes.CONTACTS} component={ContactsPage} />
          <Route path={routes.BOOK} component={BookPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
