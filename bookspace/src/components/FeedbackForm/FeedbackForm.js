import React from "react";
import styled from "styled-components";
import EmailIcon from "../../assets/icons/email-icon.svg";
import UserIcon from "../../assets/icons/user-icon.svg";

import colors from "../../config/colors";

function FeedbackForm() {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Контакты</Heading>
      </HeadingContainer>
      <Text>Оставьте ваш отзыв о портале BookSpace</Text>
      <FeedbackFormContainer>
        <FeedbackFormInputContainer>
          <IconName />
          <FeedbackFormInput placeholder="Ваше имя" type="text" />
        </FeedbackFormInputContainer>
        <FeedbackFormInputContainer>
          <IconEmail />
          <FeedbackFormInput placeholder="Ваш Email" type="text" />
        </FeedbackFormInputContainer>
        <FeedbackFormTextArea placeholder="Оставьте ваш отзыв" rows="7" />
        <FeedbackFormSubmitButton>Отправить</FeedbackFormSubmitButton>
      </FeedbackFormContainer>
    </Container>
  );
}

export default FeedbackForm;

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

const Text = styled.p`
  font-size: 1.8rem;
  @media (max-width) {
    text-align: center;
  }
`;

const FeedbackFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 760px) {
    width: 75%;
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
  color: ${colors.grayDark};
  font-size: inherit;
  padding-left: 40px;
  height: 2.6em;
`;
const FeedbackFormTextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  border: 1px solid ${colors.grayLight};
  padding: 12px;
  color: ${colors.grayDark};
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
const IconEmail = styled.div`
  position: absolute;
  top: 14px;
  left: 12px;
  width: 20px;
  height: 16px;
  background-image: url(${EmailIcon});
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
