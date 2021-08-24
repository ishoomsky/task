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
    if (rating >= index + 1) result.push(<IconFill key={index} />);
    if (rating < index + 1 && rating > index)
      result.push(<IconHalf key={index} />);
    if (rating <= index) result.push(<IconOutlined key={index} />);
  });

  return result;
};

const RatedBooksMain = (props) => {
  const { books } = props;

  const rows = books.map(({ id, title, author, url, year, rating }) => (
    <TableRowContainer key={id}>
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
        <Heading>Рейтинг книг</Heading>
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

export default RatedBooksMain;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 760px) {
    align-items: center;
  }
`;
const HeadingContainer = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    justify-content: center;
  }
`;
const Heading = styled.h2`
  font-size: 2.4rem;
  white-space: nowrap;
  @media (max-width: 760px) {
    font-size: 1.8rem;
  }
`;
const TableContainer = styled.div`
  display: grid;
  grid-template-areas:
    "rated-books-headers"
    "rated-books-rows";
  @media (max-width: 565px) {
    grid-template-areas: "rated-books-rows";
  }
`;
const TableHeadersContainer = styled.div`
  display: grid;
  grid-template-columns: 5.6fr 1.7fr 2.2fr;
  grid-template-areas: "rated-books-header-description rated-books-header-year rated-books-header-rating";
  grid-column-gap: 12px;
  @media (max-width: 1230px) {
    grid-template-columns: 5.6fr 1fr 2.9fr;
  }
  @media (max-width: 565px) {
    display: none;
  }
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
  @media (max-width: 1230px) {
    grid-template-columns: 5.6fr 1fr 2.9fr;
  }
  @media (max-width: 565px) {
    grid-template-columns: auto 1fr 4fr auto;
    grid-template-columns: auto 54px 4fr auto;
    grid-template-areas:
      "rated-books-row-description rated-books-row-description rated-books-row-description rated-books-row-description"
      ". rated-books-row-year rated-books-row-rating .";
  }
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
  @media (max-width: 1230px) {
    font-size: 18px;
    font-weight: 600;
  }
`;
const TableColumnDescriptionTextAuthor = styled.p`
  color: ${colors.grayDark};
  font-size: 1.6rem;
  font-weight: 400;
  @media (max-width: 1230px) {
    font-size: 14px;
    font-weight: 400;
  }
`;
const TableColumnYear = styled.div`
  grid-area: rated-books-row-year;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8rem;
  padding-bottom: 1em;
  @media (max-width: 1230px) {
    font-size: 16px;
  }
`;
const TableColumnRating = styled.div`
  grid-area: rated-books-row-rating;
  display: flex;
  align-items: center;
  gap: 6px;
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
  @media (max-width: 1230px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 995px) {
    width: 14px;
    height: 14px;
  }
`;
const IconOutlined = styled.div`
  width: 21px;
  height: 21px;
  background-size: cover;
  background-image: url(${StarIconOutlined});
  @media (max-width: 1230px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 995px) {
    width: 14px;
    height: 14px;
  }
`;
const IconHalf = styled.div`
  width: 21px;
  height: 21px;
  background-size: cover;
  background-image: url(${StarIconHalf});
  @media (max-width: 1230px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 995px) {
    width: 14px;
    height: 14px;
  }
`;

RatedBooksMain.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      rating: PropTypes.number,
      author: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

RatedBooksMain.defaultProps = {
  books: [],
};
