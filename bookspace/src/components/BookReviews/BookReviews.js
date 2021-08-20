import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BookReviewsList from "./BookReviewsList";

import colors from "../../config/colors";
import UserIcon from "../../assets/icons/user-icon.svg";

const BookReviews = (props) => {
  const { reviews } = props;

  // const [reviews, setReviews] = useState(reviewsMock);
  const [authorInput, setNameInput] = useState("");
  const [reviewTextarea, setReviewTextarea] = useState("");

  const handleAddReview = () => {
    console.log("add review logic");
    // if (!authorInput || !reviewTextarea) {
    //   window.alert("Заполните все поля формы!");
    //   return;
    // }
    // const newReviews = [...reviews];
    // newReviews.push({
    //   author: authorInput,
    //   review: reviewTextarea,
    // });

    // const confirm = window.confirm("Опубликовать отзыв?");
    // if (confirm) {
    //   setReviews(newReviews);
    //   setNameInput("");
    //   setReviewTextarea("");
    // }
  };
  return (
    <Container>
      <HeadingContainer>
        <Heading>Отзывы о книге</Heading>
      </HeadingContainer>
      <BookReviewsList reviews={reviews} />
      <FeedbackFormContainer>
        <FeedbackFormInputContainer>
          <IconName />
          <FeedbackFormInput
            placeholder="Ваше имя"
            type="text"
            value={authorInput}
            onChange={(e) => setNameInput(e.currentTarget.value)}
          />
        </FeedbackFormInputContainer>
        <FeedbackFormTextArea
          placeholder="Оставьте ваш отзыв"
          rows="7"
          value={reviewTextarea}
          onChange={(e) => setReviewTextarea(e.currentTarget.value)}
        />
        <FeedbackFormSubmitButton
          onClick={(e) => {
            e.preventDefault();
            handleAddReview();
          }}
        >
          Отправить
        </FeedbackFormSubmitButton>
      </FeedbackFormContainer>
    </Container>
  );
};

export default BookReviews;

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

const FeedbackFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 760px) {
    width: 75%;
  }
  @media (max-width: 565px) {
    width: 100%;
  }
`;

const FeedbackFormInputContainer = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex: 1;
  position: relative;
  border: 1px solid ${colors.grayLight};
`;

const FeedbackFormInput = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  background: ${colors.white} !important;
  outline: none;
  width: 100%;
  color: ${colors.gray};
  font-size: inherit;
  padding-left: 40px;
  height: 2.6em;
`;
const FeedbackFormTextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  border: 1px solid ${colors.grayLight};
  padding: 12px;
  color: ${colors.gray};
  font-size: 1.8rem;
  font-family: inherit;
  width: 100%;
`;

const IconName = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 16px;
  height: 16px;
  background-image: url(${UserIcon});
  background-repeat: no-repeat;
`;

const FeedbackFormSubmitButton = styled.button`
  width: 161px;
  height: 49px;
  font-size: 1.8rem;
  margin-left: auto;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.orange};

  @media (max-width: 760px) {
    margin: 0;
    align-self: center;
  }
`;
