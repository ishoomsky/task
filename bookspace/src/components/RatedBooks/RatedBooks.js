import React from "react";

import RatedBooksSmall from "./RatedBooksSmall";
import RatedBooksLarge from "./RatedBooksLarge";

const RatedBooks = (props) => {
  const { books, large } = props;

  if (large) {
    return <RatedBooksLarge books={books} />;
  }

  return <RatedBooksSmall books={books} />;
};

export default RatedBooks;
