import { useRouteMatch, Link } from "react-router-dom";

import styled from "styled-components";
import colors from "../../config/colors";
import * as routes from "../../navigation/routes";

const HeaderNavigation = () => {
  const { path } = useRouteMatch();
  return (
    <NavContainer>
      {routes.BASE_ROUTE === path ? (
        <ActiveNavItem children={<Link to={routes.BASE_ROUTE}>Книги</Link>} />
      ) : (
        <NavItem children={<Link to={routes.BASE_ROUTE}>Книги</Link>} />
      )}

      {routes.RATED === path ? (
        <ActiveNavItem children={<Link to={routes.RATED}>Рейтинг книг</Link>} />
      ) : (
        <NavItem children={<Link to={routes.RATED}>Рейтинг книг</Link>} />
      )}

      {routes.CONTACTS === path ? (
        <ActiveNavItem children={<Link to={routes.CONTACTS}>Контакты</Link>} />
      ) : (
        <NavItem children={<Link to={routes.CONTACTS}>Контакты</Link>} />
      )}
    </NavContainer>
  );
};

export default HeaderNavigation;

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
