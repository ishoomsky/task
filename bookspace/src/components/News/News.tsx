import styled from "styled-components";

import colors from "../../config/colors";
import INew from "../../interfaces/INew";

interface NewsProps {
  news: Array<INew>;
}

const News: React.FC<NewsProps> = (props) => {
  const { news = [] } = props;
  const newsList = news.map(({ date, title }) => (
    <Item key={date + title}>
      <ItemDateText>{date}</ItemDateText>
      <ItemTitleText>{title}</ItemTitleText>
    </Item>
  ));

  return (
    <Container>
      <Heading>Новости</Heading>
      <List>{newsList}</List>
    </Container>
  );
};

export default News;

const Container = styled.div``;
const Heading = styled.h3`
  width: 100%;
  max-width: 224px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 1.8rem;
`;
const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  max-width: 224px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 17px;
  padding-right: 9px;
  background-color: ${colors.white};
`;
const Item = styled.ul`
  display: flex;
  flex-direction: column;
  display: flex;
  gap: 3px;
`;
const ItemDateText = styled.span`
  font-size: 1.2rem;
  color: ${colors.gray};
`;
const ItemTitleText = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${colors.grayDark};
`;
