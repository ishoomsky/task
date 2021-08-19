import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../../config/colors";
import StarIconFill from "../../assets/icons/star-fill.svg";
import StarIconHalf from "../../assets/icons/star-half.svg";
import StarIconOutlined from "../../assets/icons/star.svg";

const calcStars = (rating) => {
  let result = [];
  [...Array(5)].forEach((_, index) => {
    if (rating >= index + 1) result.push(<IconFill />);
    if (rating < index + 1 && rating > index) result.push(<IconHalf />);
    if (rating <= index) result.push(<IconOutlined />);
  });

  return result;
};

const RatedBooksLarge = (props) => {
  const { books } = props;

  const rows = books.map(({ title, author, url, year, rating }) => (
    <TableRowContainer key={title + author}>
      <TableColumnDescription>
        <TableColumnDescriptionImage src={url} />
        <TableColumnDescriptionText>
          <TableColumnDescriptionTextTitle>
            {title}
          </TableColumnDescriptionTextTitle>
          <TableColumnDescriptionTextAuthor>
            {author}
          </TableColumnDescriptionTextAuthor>
        </TableColumnDescriptionText>
      </TableColumnDescription>
      <TableColumnYear>{year}</TableColumnYear>
      <TableColumnRating>
        {calcStars(rating)}
        <p>{rating.toFixed(1).replace(".", ",")}</p>
      </TableColumnRating>
    </TableRowContainer>
  ));

  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Рейтинг книг</HeadingText>
      </HeadingContainer>
      <TableContainer>
        <TableHeadersContainer>
          <TableHeaderDescription>
            Название и автор книги
          </TableHeaderDescription>
          <TableHeaderYear>Год</TableHeaderYear>
          <TableHeaderRating>Рейтинг</TableHeaderRating>
        </TableHeadersContainer>
        <TableRowsContainer>{rows}</TableRowsContainer>
      </TableContainer>
    </Container>
  );
};

export default RatedBooksLarge;

const Container = styled.section``;
const HeadingContainer = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
`;
const HeadingText = styled.h2`
  font-size: 2.4rem;
  white-space: nowrap;
`;

const TableContainer = styled.div`
  display: grid;
  grid-template-areas:
    "rated-books-headers"
    "rated-books-rows";
`;

const TableHeadersContainer = styled.div`
  display: grid;
  grid-template-columns: 5.6fr 1.7fr 2.2fr;
  grid-template-areas: "rated-books-header-description rated-books-header-year rated-books-header-rating";
  grid-column-gap: 12px;
`;

const TableHeaderDescription = styled.div`
  font-size: 1.8rem;
  grid-area: rated-books-header-description;
  padding: 13px 0;
`;
const TableHeaderYear = styled.div`
  font-size: 1.8rem;
  grid-area: rated-books-header-year;
  padding: 13px 0;
`;
const TableHeaderRating = styled.div`
  font-size: 1.8rem;
  grid-area: rated-books-header-rating;
  padding: 13px 0;
`;

const TableRowsContainer = styled.div`
  grid-area: "rated-books-rows";
  & > :nth-child(odd) {
    background-color: ${colors.grayExtraLight};
  }
  & > :nth-child(even) {
    background-color: ${colors.white};
  }
`;

const TableRowContainer = styled.div`
  display: grid;
  grid-template-columns: 5.6fr 1.7fr 2.2fr;
  grid-template-areas: "rated-books-row-description rated-books-row-year rated-books-row-rating";
  grid-column-gap: 12px;
`;

const TableColumnDescription = styled.div`
  grid-area: rated-books-row-description;
  display: flex;
  padding: 13px 8px;
`;
const TableColumnDescriptionImage = styled.img`
  width: 54px;
  height: 80px;
`;
const TableColumnDescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding-left: 17px;
`;
const TableColumnDescriptionTextTitle = styled.p`
  max-width: 450px;
  font-size: 2.2rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TableColumnDescriptionTextAuthor = styled.p`
  color: ${colors.grayDark};
  font-size: 1.6rem;
  font-weight: 400;
`;

const TableColumnYear = styled.div`
  grid-area: rated-books-row-year;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8rem;
  padding-bottom: 1em;
`;
const TableColumnRating = styled.div`
  grid-area: rated-books-row-rating;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  padding-bottom: 1em;
  & > p {
    font-size: 1.8rem;
  }
`;

const IconFill = styled.div`
  width: 21px;
  height: 21px;
  background-size: cover;
  background-image: url(${StarIconFill});
`;

const IconOutlined = styled.div`
  width: 21px;
  height: 21px;
  background-size: cover;
  background-image: url(${StarIconOutlined});
`;

const IconHalf = styled.div`
  width: 21px;
  height: 21px;
  background-size: cover;
  background-image: url(${StarIconHalf});
`;
