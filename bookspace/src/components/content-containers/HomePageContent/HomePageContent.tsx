import BooksList from "../../common/BooksList";
import AboutWriters from "../../common/AboutWriters";

import initBooks from "../../../assets/books.json";
import initArticles from "../../../assets/articles.json";
import IBook from "../../../interfaces/IBook";
import IArticle from "../../../interfaces/IArticle";

const HomePageContent: React.FC = () => {
  const newBooks: Array<IBook> = initBooks.filter((book) => book.new === true);
  const bestsellersBooks: Array<IBook> = initBooks.filter((book) => book.bestseller === true);
  const articles: Array<IArticle> = initArticles;
  return (
    <>
      <BooksList heading="Новые книги" books={newBooks} />
      <BooksList heading="Бестселлеры" books={bestsellersBooks} />
      <AboutWriters articles={articles} />
    </>
  );
};

export default HomePageContent;
