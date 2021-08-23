import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

import searchIcon from "../../assets/icons/search-icon.svg";
import colors from "../../config/colors";
import StarIcon from "../../assets/icons/star-fill.svg";
import initData from "../../assets/books.json";
import { removeIdFromRoute } from "../../helpers/utilities";
import * as routes from "../../navigation/routes";

class Search extends Component {
  constructor() {
    super();

    this.books = initData;
    this.state = {
      showSearchModal: false,
      searchValue: "",
      searchResult: [],
    };
  }

  handleSearchInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue) {
      this.setState({ showSearchModal: true });

      const searchResult = this.books.filter((book) =>
        book.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );
      console.log(searchResult);
      this.setState({ searchResult: searchResult });
    }
    if (inputValue === "") {
      this.setState({ showSearchModal: false, searchResult: [] });
    }
    this.setState({ searchValue: inputValue });
  };

  handleClick = (id) => {
    const { history } = this.props;
    history.push(`${removeIdFromRoute(routes.BOOK)}${id}`);
    this.setState({
      searchValue: "",
      searchResult: [],
      showSearchModal: false,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(_, nextState) {
    console.log(nextState);
    

    if (nextState.searchValue === this.state.searchValue) {
      return false;
    } ;
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("search render");

    const items = this.state.searchResult.map(
      ({ title, rating, author, id }) => (
        <Item onClick={() => this.handleClick(id)} key={id}>
          <ItemHeaderContainer>
            <ItemTitleText>{title}</ItemTitleText>
            <ItemRatingContainer>
              <ItemRatingValueText>
                {rating.toFixed(1).replace(".", ",")}
              </ItemRatingValueText>
              <ItemRatingIcon />
            </ItemRatingContainer>
          </ItemHeaderContainer>
          <ItemFooterContainer>
            <ItemFooterAuthorText>{author}</ItemFooterAuthorText>
          </ItemFooterContainer>
        </Item>
      )
    );

    return (
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Поиск"
          value={this.state.searchValue}
          onChange={(e) => {
            this.handleSearchInput(e);
          }}
        />
        <SearchIcon />
        {this.state.showSearchModal && (
          <SearchOutput>
            {this.state.searchResult.length === 0 && (
              <Message>Ничего не найдено</Message>
            )}
            <List>{items}</List>
          </SearchOutput>
        )}
      </SearchContainer>
    );
  }
}

const SearchWithRouter = withRouter(Search);

export default SearchWithRouter;

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

const SearchOutput = styled.div`
  position: absolute;
  left: -1px;
  width: 468px;
  font-size: 1.8rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayLight};
  border-radius: 1px;
  z-index: 100;

  @media (max-width: 1230px) {
    width: 250px;
  }
  @media (max-width: 995px) {
    width: 200px;
    font-size: 14px;
  }
  @media (max-width: 760px) {
    font-size: 18px;
    width: calc(100% + 2px);
    margin: 0;
  }
`;

const Message = styled.h4`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: ${colors.gray};
  font-size: 1.5rem;
`;

const List = styled.ul`
  width: 100%;
  max-width: 468px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  & > :nth-child(n + 1):not(:last-child) {
    border-bottom: 1px solid ${colors.grayLight};
  }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 9px;
  padding-left: 15px;
  background-color: ${colors.white};
  cursor: pointer;
`;
const ItemHeaderContainer = styled.div`
  display: flex;
  gap: 4px;
`;
const ItemTitleText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: ${colors.grayDark};
`;
const ItemRatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 4px;
`;
const ItemRatingValueText = styled.span`
  font-size: 1.2rem;
  color: ${colors.orange};
`;
const ItemRatingIcon = styled.div`
  width: 10px;
  height: 10px;
  background-image: url(${StarIcon});
  background-size: cover;
`;

const ItemFooterContainer = styled.div`
  display: flex;
`;

const ItemFooterAuthorText = styled.span`
  flex: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: ${colors.gray};
`;