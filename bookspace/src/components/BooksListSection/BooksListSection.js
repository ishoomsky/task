import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../../config/colors";

const BooksListSection = (props) => {
  const { heading, books } = props;

  const items = books.map(({ title, author, url }) => (
    <Item key={`${title}-${author}-${url}`}>
      <ItemImage src={url} />
      <ItemDescription>
        <ItemDescriptionTitleText>{title}</ItemDescriptionTitleText>
        <ItemDescriptionAuthorText>{author}</ItemDescriptionAuthorText>
      </ItemDescription>
    </Item>
  ));

  return (
    <Container>
      <HeadingContainer>
        <Heading>{heading}</Heading>
      </HeadingContainer>
      <List>{items}</List>
    </Container>
  );
};

export default BooksListSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 760px) {
    align-items: center;
  }
  @media (max-width: 565px) {
    width: 100%;
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

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 760px) {
    justify-content: center;
  }
`;
const Item = styled.li`
  width: 224px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ItemImage = styled.img`
  width: 224px;
  height: 288px;
`;
const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemDescriptionTitleText = styled.p`
  flex: 1;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ItemDescriptionAuthorText = styled.p`
  flex: 1;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.gray};
`;

BooksListSection.defaultProps = {
  books: [],
};

BooksListSection.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  heading: PropTypes.string.isRequired,
};
