import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../config/colors';
import StarIcon from '../../assets/icons/star-fill.svg';

function RatedBooks() {
  return (
    <Container>
      <Heading>Рейтинг книг</Heading>
      <List>
        <Item>
          <ItemHeaderContainer>
            <ItemTitleText>
              Раньше девочки носили платье в горошек
            </ItemTitleText>
            <ItemRatingContainer>
              <ItemRatingValueText>5,0</ItemRatingValueText>
              <ItemRatingIcon />
            </ItemRatingContainer>
          </ItemHeaderContainer>
          <ItemFooterContainer>
            <ItemFooterAuthorText>Катя Майорова</ItemFooterAuthorText>
          </ItemFooterContainer>
        </Item>
      </List>
    </Container>
  );
}

export default RatedBooks;

const Container = styled.div`
  padding-left: 16px;
`;
const Heading = styled.h3`
  width: 100%;
  max-width: 207px;
  height: 48px;
  display: flex;
  align-items: center;
  /* padding-left: 17px; */
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 1.8rem;
`;
const List = styled.ul`
  width: 100%;
  max-width: 224px;
  display: flex;
  flex-direction: column;
  & > :nth-child(n + 1):not(:last-child) {
    border-bottom: 1px solid ${colors.grayLight};
  }
`;
const Item = styled.li`
  padding: 9px;
  /* padding-left: 16px; */
  display: flex;
  flex-direction: column;
  gap: 4px;
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
