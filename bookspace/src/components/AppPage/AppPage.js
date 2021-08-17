import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import colors from '../../config/colors';

const AppPage = ({ headerContent, sidebarContent, articleContent }) => {
  return (
    <PageContainer>
      <HeaderContainer>{headerContent}</HeaderContainer>
      <MainContainer>
        <MainContent>
          <SidebarContainer>{sidebarContent}</SidebarContainer>
          <ArticleContainer>{articleContent}</ArticleContainer>
        </MainContent>
      </MainContainer>
    </PageContainer>
  );
};

export default AppPage;

const PageContainer = styled.div`
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

const HeaderContainer = styled.header`
  grid-area: header;
  background-color: ${colors.white};
  display: grid;
  grid-template-areas: ". header-content .";
  grid-template-columns: auto minmax(0, 1200px) auto;

  @media (max-width: 1230px) {
    grid-template-columns: auto minmax(0, 960px) auto;
  }
`;

const MainContainer = styled.main`
  grid-area: main;
  display: grid;
  grid-template-areas: ". main-content .";
  grid-template-columns: auto minmax(0, 1200px) auto;
`;
const MainContent = styled.div`
  grid-area: main-content;
  display: grid;
  grid-template-areas: "aside article";
  grid-template-columns: 224px 1fr;
  grid-gap: 20px;
`;

const SidebarContainer = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ArticleContainer = styled.article`
  grid-area: article;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

AppPage.propTypes = {
  headerContent: PropTypes.element.isRequired,
  sidebarContent: PropTypes.element.isRequired,
  articleContent: PropTypes.element.isRequired,
};