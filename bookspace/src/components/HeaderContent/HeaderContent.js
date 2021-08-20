import React from "react";
import styled from "styled-components";
import bookSpaceLogo from "../../assets/logo/book-space-logo.svg";
import searchIcon from "../../assets/icons/search-icon.svg";

import colors from "../../config/colors";

const HeaderContent = () => {
  return (
    <Container>
      <Logo />
      <NavContainer>
        <ActiveNavItem>Книги</ActiveNavItem>
        <NavItem>Рейтинг книг</NavItem>
        <NavItem>Контакты</NavItem>
      </NavContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="Поиск" />
        <SearchIcon />
      </SearchContainer>
    </Container>
  );
};

export default HeaderContent;

const Container = styled.div`
  grid-area: header-content;
  display: flex;
  align-items: center;
  gap: 62px;

  @media (max-width: 995px) {
    gap: 32px;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
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

  @media (max-width: 995px) {
    font-size: 14px;
    padding: 0.7em 1.2em;
  }
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
  @media (max-width: 995px) {
    width: 200px;
    font-size: 14px;
  }
  @media (max-width: 760px) {
    font-size: 18px;
    width: 70%;
    margin: 0;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${searchIcon});

  @media (max-width: 995px) {
    top: 10px;
    width: 18px;
    height: 18px;
  }
  @media (max-width: 760px) {
    top: 13px;
  }
`;
