import React from "react";
import PropTypes from 'prop-types'

import RatedBooksSidebar from "./RatedBooksSidebar";
import RatedBooksMain from "./RatedBooksMain";

const RatedBooks = (props) => {
  const { books, large } = props;

  if (large) {
    return <RatedBooksMain books={books} />;
  }

  return <RatedBooksSidebar books={books} />;
};

export default RatedBooks;

RatedBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      rating: PropTypes.number,
      author: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  large: PropTypes.bool,
};

RatedBooks.defaultProps = {
  books: [],
  large: false,
};
