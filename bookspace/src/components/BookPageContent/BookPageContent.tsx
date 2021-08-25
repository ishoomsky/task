import { useRouteMatch } from "react-router-dom";

import BookDescription from "../BookDescription";
import BookReviews from "../BookReviews/BookReviews";
import initBooks from "../../assets/books.json";

import IBook from "../../interfaces/IBook";

const BookPageContent = () => {
  const { params } = useRouteMatch();
  const { bookId }: any = params;

  const books: Array<IBook> = initBooks;

  const currentBook = books.find((book) => book.id === bookId);
  // const { author, title, description, url, reviews } = currentBook;
  console.log(currentBook);
  return (
    <>
      <BookDescription
        author={currentBook.author}
        title={currentBook.title}
        description={currentBook.description}
        url={currentBook.url}
      />
      <BookReviews reviews={currentBook.reviews} />
    </>
  );
};

export default BookPageContent;
