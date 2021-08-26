import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../../config/colors";
import { removeIdFromRoute } from "../../../helpers/utilities";
import * as routes from "../../../navigation/routes";
import StarIcon from "../../../assets/icons/star-fill.svg";
import IBook from "../../../interfaces/IBook";

interface RatedBooksSmallProps {
  books: Array<IBook>;
}

const RatedBooksSmall: React.FC<RatedBooksSmallProps> = (props) => {
  const { books = [] } = props;

  const sortedItems = books.sort((a, b) => b.rating - a.rating);
  const items = sortedItems.map(({ title, rating, author, id }) => (
    <Item key={title + rating + author}>
      <Link to={`${removeIdFromRoute(routes.BOOK)}${id}`}>
        <ItemHeaderContainer>
          <ItemTitleText>{title}</ItemTitleText>
          <ItemRatingContainer>
            <ItemRatingValueText>
              {rating.toFixed(1).replace(".", ",")}
            </ItemRatingValueText>
            <ItemRatingIcon />
          </ItemRatingContainer>
        </ItemHeaderContainer>
        <ItemFooterContainer>
          <ItemFooterAuthorText>{author}</ItemFooterAuthorText>
        </ItemFooterContainer>
      </Link>
    </Item>
  ));

  return (
    <Container>
      <Heading>Рейтинг книг</Heading>
      <List>{items}</List>
    </Container>
  );
};

export default RatedBooksSmall;

const Container = styled.div`
  @media (max-width: 760px) {
    width: 224px;
  }
`;
const Heading = styled.h3`
  width: 100%;
  max-width: 224px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 1.8rem;

  @media (max-width: 760px) {
    width: 224px;
  }
`;
const List = styled.ul`
  width: 100%;
  max-width: 224px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  & > :nth-child(n + 1):not(:last-child) {
    border-bottom: 1px solid ${colors.grayLight};
  }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 9px;
  padding-left: 15px;
  background-color: ${colors.white};
`;
const ItemHeaderContainer = styled.div`
  display: flex;
  gap: 4px;
`;
const ItemTitleText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: ${colors.grayDark};
`;
const ItemRatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 4px;
`;
const ItemRatingValueText = styled.span`
  font-size: 1.2rem;
  color: ${colors.orange};
`;
const ItemRatingIcon = styled.div`
  width: 10px;
  height: 10px;
  background-image: url(${StarIcon});
  background-size: cover;
`;
const ItemFooterContainer = styled.div`
  display: flex;
`;
const ItemFooterAuthorText = styled.span`
  flex: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: ${colors.gray};
`;
