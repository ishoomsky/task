import React, { useState } from "react";
import BooksList from "../BooksList";
import AboutWriters from "../AboutWriters";

import initBooks from "../../assets/books.json";
import initArticles from "../../assets/articles.json";

const HomePageContent = () => {
  const [books] = useState(initBooks);
  const [articles] = useState(initArticles);
  const newBooks = books.filter((book) => book.new === true);
  const bestsellersBooks = books.filter((book) => book.bestseller === true);
  return (
    <>
      <BooksList heading="Новые книги" books={newBooks} />
      <BooksList heading="Бестселлеры" books={bestsellersBooks} />
      <AboutWriters articles={articles} />
    </>
  );
};

export default HomePageContent;
