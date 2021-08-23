import React, { useState } from "react";
import RatedBooks from "../RatedBooks";

import initData from "../../assets/books.json";

const RatedBooksPageContent = () => {
  const [books] = useState(initData);

  const sortedBooks = books.sort((a, b) => b.rating - a.rating);

  return <RatedBooks large books={sortedBooks} />;
};

export default RatedBooksPageContent;
