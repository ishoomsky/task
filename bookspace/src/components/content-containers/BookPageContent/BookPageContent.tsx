import { useRouteMatch } from "react-router-dom";

import BookDescription from "../../common/BookDescription";
import BookReviews from "../../common/BookReviews/BookReviews";
import initBooks from "../../../assets/books.json";
import IBook from "../../../interfaces/IBook";

const BookPageContent: React.FC = () => {
  const { params } = useRouteMatch();
  const { bookId }: any = params;

  const books: Array<IBook> = initBooks;

  const currentBook = books.find((book) => book.id === bookId) as IBook;
  const { author, title, description, url, reviews } = currentBook;

  return (
    <>
      <BookDescription
        author={author}
        title={title}
        description={description}
        url={url}
      />
      <BookReviews reviews={reviews} />
    </>
  );
};

export default BookPageContent;
