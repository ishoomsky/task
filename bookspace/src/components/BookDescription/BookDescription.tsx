import styled from "styled-components";

import colors from "../../config/colors";

interface IBookDescriptionProps {
  author: string;
  title: string;
  description: string;
  url: string;
}

const BookDescription: React.FC<IBookDescriptionProps> = (props) => {
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
  text-align: center;
`;

const BookDescriptionContainer = styled.div`
  display: grid;
  grid-template-areas: "book-description-figure book-description-text";
  grid-template-columns: 224px 1fr;
  grid-gap: 20px;

  @media (max-width: 995px) {
    grid-template-columns: 154px 1fr;
  }
  @media (max-width: 760px) {
    grid-template-areas:
      "book-description-text"
      "book-description-figure";
    grid-template-columns: 1fr;
  }
`;

const BookDescriptionFigure = styled.figure`
  grid-area: book-description-figure;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 760px) {
    align-items: center;
  }
`;
const BookDescriptionFigureImage = styled.img`
  width: 100%;
  @media (max-width: 760px) {
    width: 150px;
  }
`;
const BookDescriptionFigureTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 600;

  @media (max-width: 995px) {
    font-size: 18px;
    font-weight: 600;
  }
`;
const BookDescriptionFigureAuthor = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${colors.gray};

  @media (max-width: 995px) {
    font-size: 14px;
    font-weight: 400;
  }
`;

const BookDescriptionTextContainer = styled.div`
  grid-area: book-description-text;
`;

const BookDescriptionTextHeading = styled.h2`
  font-size: 2.4rem;

  @media (max-width: 995px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  @media (max-width: 760px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;
const BookDescriptionTextParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 2.9rem;
  color: ${colors.gray};

  @media (max-width: 995px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  @media (max-width: 995px) {
    font-size: 1.4rem;
    line-height: 2.3rem;
  }
`;
