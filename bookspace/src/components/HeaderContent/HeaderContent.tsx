import styled from "styled-components";

import HeaderNavigation from "../HeaderNavigation";
import Search from "../Search";
import bookSpaceLogo from "../../assets/logo/book-space-logo.svg";

const HeaderContent: React.FC = () => {
  return (
    <Container>
      <Logo />
      <HeaderNavigation />
      <Search />
    </Container>
  );
};

export default HeaderContent;

const Container = styled.div`
  grid-area: header-content;
  display: flex;
  align-items: center;
  gap: 62px;
  /* overflow: hidden; */

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
