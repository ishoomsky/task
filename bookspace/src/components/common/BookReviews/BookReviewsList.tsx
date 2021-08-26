import React from "react";
import styled from "styled-components";

import colors from "../../../config/colors";
import UserIconWhite from "../../../assets/icons/user-icon-white.svg";
import IReview from "../../../interfaces/IReview";

interface BookReviewsListProps {
  reviews: Array<IReview>;
}

const BookReviewsList: React.FC <BookReviewsListProps> = (props) => {
  const { reviews } = props;
  const items = reviews.map(({ author, review }) => (
    <BookReviewsItem key={author + review}>
      <BookReviewsItemHeader>
        <BookReviewsItemIcon />
        <BookReviewsItemName>{author}</BookReviewsItemName>
      </BookReviewsItemHeader>
      <BookReviewsItemText>{review}</BookReviewsItemText>
    </BookReviewsItem>
  ));

  return <BookReviewsListContainer>{items}</BookReviewsListContainer>;
};

export default BookReviewsList;

const BookReviewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 760px) {
    width: 75%;
  }
  @media (max-width: 565px) {
    width: 100%;
  }
`;

const BookReviewsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${colors.grayLight};
`;

const BookReviewsItemHeader = styled.div`
  height: 48px;
  padding-left: 14px;
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: ${colors.orange};
  border-bottom: 1px solid ${colors.grayLight};
`;

const BookReviewsItemIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${UserIconWhite});
`;
const BookReviewsItemName = styled.p`
  font-size: 1.8rem;
  color: ${colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookReviewsItemText = styled.p`
  font-size: 1.8rem;
  color: ${colors.gray};
  background-color: ${colors.white};
  padding: 17px;
`;
