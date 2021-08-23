import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

import BookDescription from "../BookDescription";
import BookReviews from "../BookReviews/BookReviews";
import initBooks from "../../assets/books.json";

const BookPageContent = () => {
  const [books] = useState(initBooks);
  const {
    params: { bookId },
  } = useRouteMatch();

  const currentBook = books.find((book) => book.id === bookId);
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
