import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../../config/colors";

const AboutWriters = (props) => {
  const { articles } = props;
  const items = articles.map(({ title, text }) => (
    <Item key={title + text}>
      <ItemTitleText>{title}</ItemTitleText>
      <span>{text}</span>
    </Item>
  ));

  return (
    <Container>
      <HeadingContainer>
        <Heading>О жизни и творчестве писателей</Heading>
      </HeadingContainer>
      <List>{items}</List>
    </Container>
  );
};

export default AboutWriters;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 760px) {
    align-items: center;
  }
`;
const HeadingContainer = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    justify-content: center;
  }
`;
const Heading = styled.h2`
  font-size: 2.4rem;
  white-space: nowrap;
  @media (max-width: 760px) {
    font-size: 1.8rem;
  }
`;

const List = styled.ol``;
const Item = styled.li`
  color: ${colors.gray};
  font-size: 1.8rem;
  line-height: 2.9rem;
  & > :first-child {
    margin-right: 4px;
  }
`;
const ItemTitleText = styled.span`
  text-decoration: underline;
`;

AboutWriters.defaultProps = {
  articles: [],
};

AboutWriters.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
