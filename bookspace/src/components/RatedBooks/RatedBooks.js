import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';
import StarIcon from '../../assets/icons/star-fill.svg';

const RatedBooks = ({ books }) => {
  const items = books
    .sort((a, b) => b.rating - a.rating)
    .map(({ title, rating, author }) => (
      <Item>
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
      </Item>
    ));
  return (
    <Container>
      <Heading>Рейтинг книг</Heading>
      <List>{items}</List>
    </Container>
  );
}

export default RatedBooks;

const Container = styled.div`
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
