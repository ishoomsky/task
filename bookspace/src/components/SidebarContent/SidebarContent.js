import React, { useState } from "react";

import initData from "../../assets/books.json";
import RatedBooks from "../RatedBooks";
import News from "../News";
import newsInit from "../../assets/news.json";

const SidebarContent = () => {
  const [books] = useState(initData);
  const [news] = useState(newsInit);

  const rateBooks = books
    .filter((book) => book.rating >= 4)
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      <RatedBooks books={rateBooks} />
      <News news={news} />
    </>
  );
};

export default SidebarContent;