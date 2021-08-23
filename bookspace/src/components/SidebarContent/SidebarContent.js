import React, { useState } from "react";

import initData from "../../assets/books.json";
import RatedBooks from "../RatedBooks";
import News from "../News";
import newsInit from "../../assets/news.json";

const SidebarContent = () => {
  const [books] = useState(initData);
  const [news] = useState(newsInit);

  return (
    <>
      <RatedBooks books={books} />
      <News news={news} />
    </>
  );
};

export default SidebarContent;