import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../config/colors";

const BookDescription = (props) => {
  const { author, title, description, url } = props;
  return (
    <Container>
      <HeadingContainer>
        <Heading>{title}</Heading>
      </HeadingContainer>
      <BookDescriptionContainer>
        <BookDescriptionFigure>
          <BookDescriptionFigureImage src={url} />
          <figcaption>
            <BookDescriptionFigureTitle>{title}</BookDescriptionFigureTitle>
            <BookDescriptionFigureAuthor>{author}</BookDescriptionFigureAuthor>
          </figcaption>
        </BookDescriptionFigure>
        <BookDescriptionTextContainer>
          <BookDescriptionTextHeading>
            Описание книги
          </BookDescriptionTextHeading>
          <BookDescriptionTextParagraph>
            {description}
          </BookDescriptionTextParagraph>
        </BookDescriptionTextContainer>
      </BookDescriptionContainer>
    </Container>
  );
};

export default BookDescription;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const HeadingContainer = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
`;
const Heading = styled.h2`
  font-size: 2.4rem;
  white-space: nowrap;
`;

const BookDescriptionContainer = styled.div`
  display: grid;
  grid-template-areas: "book-description-figure book-description-text";
  grid-template-columns: 224px 1fr;
  grid-gap: 20px;
`;

const BookDescriptionFigure = styled.figure`
  grid-area: book-description-figure;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const BookDescriptionFigureImage = styled.img`
  width: 100%;
`;
const BookDescriptionFigureTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
`;
const BookDescriptionFigureAuthor = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray);
`;

const BookDescriptionTextContainer = styled.div`
  grid-area: book-description-text;
`;

const BookDescriptionTextHeading = styled.h2`
  font-size: 2.4rem;
`;
const BookDescriptionTextParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 29px;
  color: ${colors.gray};
`;

BookDescription.propTypes = {};
