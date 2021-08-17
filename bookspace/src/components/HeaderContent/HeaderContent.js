import React from 'react';
import styled from 'styled-components';
import bookSpaceLogo from '../../assets/logo/book-space-logo.svg';
import searchIcon from '../../assets/icons/search-icon.svg';

import colors from '../../config/colors';

function HeaderContent() {
  return (
    <Container>
      <Logo />
      <NavContainer>
        <ActiveNavItem>Книги</ActiveNavItem>
        <NavItem>Рейтинг книг</NavItem>
        <NavItem>Контакты</NavItem>
      </NavContainer>
      <SearchContainer>
        <SearchInput />
        <SearchIcon />
      </SearchContainer>
    </Container>
  );
}

export default HeaderContent;

const Container = styled.div`
  grid-area: header-content;
  display: flex;
  align-items: center;
  gap: 62px;
`;
const Logo = styled.div`
  width: 120px;
  height: 50px;
  background-image: url(${bookSpaceLogo});
`;
const NavContainer = styled.nav`
  display: flex;
`;
const NavItem = styled.div`
  font-size: 1.8rem;
  padding: 0.7em 1.4em;
  font-weight: 500;
  text-transform: uppercase;
`;
const ActiveNavItem = styled(NavItem)`
  color: ${colors.white};
  background-color: ${colors.orange};
`;
const SearchContainer = styled.div`
  width: 468px;
  margin-left: auto;
  position: relative;
  font-size: 1.8rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayLight};
  border-radius: 2px;

  @media (max-width: 1230px) {
    width: 250px;
  }
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  background: ${colors.white} !important;
  outline: none;
  width: 100%;
  color: ${colors.gray};
  font-size: inherit;
  padding-left: 50px;
  height: 2.6em;
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 17px;
  width: 22px;
  height: 22px;
  background-image: url(${searchIcon});
`;

