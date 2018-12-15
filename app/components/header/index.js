import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { NavLink, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import MenuIcon from 'images/header/menuIcon';
import SearchIcon from 'images/header/searchIcon';
import ActionButton from '../ActionButton';

const Wrapper = styled.div`
  position: relative;
  flex-direction: column;
  background: #f9f9f9;
`;

const HeaderWrapper = styled.div`
  display: flex;
  z-index: 9999;
  position: ${props => (props.white ? 'absolute' : 'relative')};
  width: 100%;
  padding: 1.5em 4em;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  flex-wrap: wrap;

  @media screen and (max-width: 916px) {
    padding: 1.5em 3em;
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  font-size: 1.9em;
  flex: 1;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: ${props => (props.white ? '#fff' : ' #474d90')};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #b998ea;
  }

  @media screen and (max-width: 916px) {
    flex: 0;
    color: ${props => (props.white ? '#fff' : ' #474d90')};
  }
`;

const NavigatorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: 3vw;
  min-width: 340px;
  max-width: 380px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-right: 2vw;

  @media screen and (max-width: 916px) {
    display: none;
  }
`;

const NavigationButton = styled(NavLink)`
  font-size: 1.05em;
  font-weight: 400;
  color: ${props => (props.navwhite ? '#fff' : ' #474d90')};
  text-decoration: none;
  justify-content: center;
  letter-spacing: 1.5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #b998ea;
  }
`;

const SearchButton = styled.button`
  color: ${props => (props.white ? '#fff' : ' #474d90')};
  outline: none;
  margin-right: 2vw;

  @media screen and (max-width: 916px) {
    margin-right: 3vw;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const MenuIconButton = styled.button`
  display: none;
  color: ${props => (props.white ? '#fff' : ' #474d90')};
  outline: none;

  @media screen and (max-width: 916px) {
    display: block;
  }
`;

const LoginRegButton = styled.div`
  @media screen and (max-width: 916px) {
    display: none;
  }
`;

const MenuSearchWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const SearchPopupWrapper = styled.form`
  position: absolute;
  display: flex;
  top: ${props => (props.top || props.searchIsShown ? '99' : '0')}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props =>
    props.shown || props.searchIsShown ? '#20244C' : 'transparent'};
  padding: 1.5em 4em;
  box-shadow: ${props =>
    props.shown || props.searchIsShown ? '0 3px 10px #000' : ''};
  width: 100%;
  z-index: 9990;
  overflow: hidden;
  transition: 0.5s;

  @media screen and (max-width: 916px) {
    padding: 1.5em 3em;
  }
`;

const SearchPopupFieldWrapper = styled.div`
  display: ${props => (props.shown || props.searchIsShown ? 'flex' : 'none')};
  align-items: center;
  float: right;
  width: 100%;
`;

const SearchPopupInputForm = {
  fontSize: '1.5em',
  marginLeft: '1em',
  marginRight: '1em',
  outline: 'none',
  width: '100%',
  color: '#fff',
};

const SearchPopupCloseButtonWrapper = styled.button`
  display: ${props => (props.shown && !props.searchIsShown ? 'flex' : 'none')};
  justify-content: center;
  position: relative;
  align-items: center;
  left: 10px;
  transform: rotate(45deg);
  height: 20px;
  width: 20px;
  z-index: 2;
`;

const SearchPopupCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #f9f9f9;
  height: 20px;
  width: 3px;
  left: -7px;
  top: 6px;
  position: relative;
  border-radius: 20px;

  &::after {
    content: '';
    height: 3px;
    width: 20px;
    background: #f9f9f9;
    position: absolute;
    border-radius: 20px;
    left: -9px;
    top: 9px;
  }
`;

const SearchButtonWrapper = styled.button`
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: props.top || 0,
      shown: false,
    };

    this.searchSubmit = this.searchSubmit.bind(this);
    this.showSearchBlock = this.showSearchBlock.bind(this);
    this.onClickHideSearch = this.onClickHideSearch.bind(this);
  }

  showSearchBlock() {
    if (this.state.top === 0) {
      this.setState({ top: 99 });
    } else {
      this.setState({ top: 0 });
    }
    if (this.state.shown) {
      this.setState({ shown: false });
    } else {
      this.setState({ shown: true });
    }
  }

  onClickHideSearch() {
    if (this.state.top !== 0) {
      this.setState({ top: 0 });
      this.setState({ shown: false });
    }
  }

  searchSubmit() {
    push(`/search/${this.props.searchValue}`);
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper white={this.props.white}>
          <Logo to="/" white={this.props.white}>
            Консенсус
          </Logo>
          <NavigatorContainer>
            <NavigationButton
              to="/popular"
              navwhite={this.props.navwhite}
              white={this.props.white}
            >
              Популярные
            </NavigationButton>
            <NavigationButton
              to="/themes"
              navwhite={this.props.navwhite}
              white={this.props.white}
            >
              Тематика
            </NavigationButton>
            <NavigationButton
              to="/follow"
              navwhite={this.props.navwhite}
              white={this.props.white}
            >
              Подписки
            </NavigationButton>
          </NavigatorContainer>
          <MenuSearchWrapper>
            <SearchButton onClick={this.showSearchBlock}>
              <SearchIcon
                white={this.props.white}
                navwhite={this.props.navwhite}
              />
            </SearchButton>
            <MenuIconButton>
              <MenuIcon white={this.props.white} />
            </MenuIconButton>
          </MenuSearchWrapper>
          <LoginRegButton>
            <ActionButton text="Вход и регистрация" url="/sign-in" white />
          </LoginRegButton>
        </HeaderWrapper>
        <SearchPopupWrapper
          top={this.state.top}
          shown={this.state.shown}
          searchIsShown={this.props.searchIsShown}
          onSubmit={this.searchSubmit}
        >
          <SearchPopupFieldWrapper
            shown={this.state.shown}
            searchIsShown={this.props.searchIsShown}
          >
            <SearchButtonWrapper onClick={this.searchSubmit}>
              <SearchIcon white />
            </SearchButtonWrapper>
            <Field
              name="search"
              placeholder="Найти..."
              component="input"
              type="text"
              style={SearchPopupInputForm}
            />
          </SearchPopupFieldWrapper>
          <SearchPopupCloseButtonWrapper
            onClick={this.onClickHideSearch}
            shown={this.state.shown}
          >
            <SearchPopupCloseButton />
          </SearchPopupCloseButtonWrapper>
        </SearchPopupWrapper>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  navwhite: PropTypes.bool,
  white: PropTypes.bool,
  top: PropTypes.number,
};

const Head = reduxForm({
  form: 'header',
  getFormState: state => state.get('form'),
  initialValues: {
    searchValue: '',
  },
})(Header);

const Headed = connect(
  state => {
    const selector = formValueSelector('header', states => states.get('form'));
    const searchValue = selector(state, 'search');
    return { searchValue };
  },
  () => ({}),
)(Head);

export default withRouter(Headed);
