import React from 'react';
import styled from "styled-components";
import { Grid } from "carbon-components-react";

const AppPage = ({ children }) => {
  return (
    <Grid>
      <HeaderMargin>{children}</HeaderMargin>
    </Grid>
  );
};

export default AppPage;

const HeaderMargin = styled.div`
  margin-top: 3rem;
`;
