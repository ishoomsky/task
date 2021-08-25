// AppPage - is a "skeleton" component.
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import colors from "../../config/colors";

interface AppPageProp {
  headerContent: React.ReactNode;
  sidebarContent: React.ReactNode;
  articleContent: React.ReactNode;
}

const AppPage = (props: AppPageProp) => {
  const { headerContent, sidebarContent, articleContent } = props;
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
  min-height: 101vh;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: minmax(60px, 11vh);
  /* grid-template-rows: auto; */
  grid-gap: 3vh;
  background-color: ${colors.body.grayExtraLight};
  font-family: "Roboto";
  color: ${colors.grayDark};

  @media (max-width: 760px) {
    min-width: 350px;
    grid-template-rows: auto;
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
  @media (max-width: 995px) {
    grid-template-columns: auto minmax(0, 720px) auto;
  }
  @media (max-width: 760px) {
    padding: 2vh 0;
    grid-template-columns: auto minmax(0, 700px) auto;
  }
`;

const MainContainer = styled.main`
  grid-area: main;
  display: grid;
  grid-template-areas: ". main-content .";
  grid-template-columns: auto minmax(0, 1200px) auto;

  @media (max-width: 1230px) {
    grid-template-columns: auto minmax(0, 960px) auto;
  }
  @media (max-width: 995px) {
    grid-template-columns: auto minmax(0, 720px) auto;
  }
  @media (max-width: 760px) {
    grid-template-columns: auto minmax(0, 700px) auto;
  }
`;

const MainContent = styled.div`
  grid-area: main-content;
  display: grid;
  grid-template-areas: "aside article";
  grid-template-columns: 224px 1fr;
  grid-gap: 20px;

  @media (max-width: 760px) {
    grid-area: main-content;
    display: grid;
    grid-template-areas:
      ". article ."
      ". aside .";
    grid-template-columns: auto minmax(0, 700px) auto;
    grid-gap: 50px;
  }
`;

const SidebarContainer = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 760px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
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
