import React, { useState } from "react";
import FeedbackFormFunc from "../../common/FeedbackForm";

const ContactsPageContent: React.FC = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const feedBackFormProps =  {
    nameInput, setNameInput,
    emailInput, setEmailInput,
    textInput, setTextInput,
    submitted, setSubmitted
  };
  
  const memoFeedbackFormFunc = React.useMemo(
    () => {
      return <FeedbackFormFunc {...feedBackFormProps} />;
      // eslint-disable-next-line
    }, [feedBackFormProps.nameInput, feedBackFormProps.emailInput, feedBackFormProps.textInput]
  );

  return memoFeedbackFormFunc;
};

export default ContactsPageContent;
