import React, { useState } from "react";
// import FeedbackFormClass from "../FeedbackForm/FeedbackFormClass";
import FeedbackFormFunc from "../FeedbackForm/FeedbackFormFunc";

const ContactsPageContent = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const feedBackFormProps = {
    nameInput, setNameInput,
    emailInput, setEmailInput,
    textInput, setTextInput,
    submitted, setSubmitted
  };
  

  const memoizedFeedbackFormFunc = React.useCallback(
    <FeedbackFormFunc {...feedBackFormProps} /> ,
    [nameInput, emailInput, textInput]
  );
    return memoizedFeedbackFormFunc;
};

export default ContactsPageContent;
