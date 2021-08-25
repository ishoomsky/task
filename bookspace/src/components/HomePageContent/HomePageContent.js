import BooksList from "../BooksList";
import AboutWriters from "../AboutWriters";

import initBooks from "../../assets/books.json";
import initArticles from "../../assets/articles.json";

const HomePageContent = () => {
  const newBooks = initBooks.filter((book) => book.new === true);
  const bestsellersBooks = initBooks.filter((book) => book.bestseller === true);
  return (
    <>
      <BooksList heading="Новые книги" books={newBooks} />
      <BooksList heading="Бестселлеры" books={bestsellersBooks} />
      <AboutWriters articles={initArticles} />
    </>
  );
};

export default HomePageContent;
