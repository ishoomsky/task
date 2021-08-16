import React from 'react';
import styled from "styled-components";

import colors from '../../config/colors';

const AppPage = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default AppPage;

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: 11vh;
  grid-gap: 3vh;
  background-color: ${colors.body.grayExtraLight};
  font-family: "Roboto";
  color: ${colors.grayDark};

  @media (max-width: 760px) {
    min-width: 350px;
    /* grid-template-rows: auto; */
  }
`;
