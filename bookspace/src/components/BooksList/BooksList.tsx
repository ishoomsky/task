import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../config/colors";
import { removeIdFromRoute } from "../../helpers/utilities";
import * as routes from "../../navigation/routes";
import IBook from "../../interfaces/IBook";

interface BooksListProps {
  heading: string,
  books: Array<IBook>
}

const BooksList: React.FC<BooksListProps> = (props) => {
  const { heading, books = [] } = props;

  const items = books.map(({ id, title, author, url }) => (
    <Item key={`${title}-${author}-${url}`}>
      <Link to={`${removeIdFromRoute(routes.BOOK)}${id}`}>
        <ItemImage src={url} />
        <ItemDescription>
          <ItemDescriptionTitleText>{title}</ItemDescriptionTitleText>
          <ItemDescriptionAuthorText>{author}</ItemDescriptionAuthorText>
        </ItemDescription>
      </Link>
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

export default BooksList;

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
