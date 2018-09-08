import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from 'images/SearchIcon';
import ActionButton from '../ActionButton';
import MenuIcon from '../../images/MenuIcon';

const HeaderWrapper = styled.div`
  display: flex;
  z-index: 9999;
  position: ${props => (props.path === '/' ? 'relative' : 'relative')};
  width: 100%;
  height: auto;
  padding: 1.5em 60px;
  align-items: center;
  justify-content: space-between;
  background: ${props => (props.path === '/' ? '#20244C' : '#fff')};
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    padding: 1.5em 40px;
  }
`;

const Logo = styled(Link)`
  display: inline-flex;
  font-size: 1.9em;
  flex: 1;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: ${props => (props.path === '/' ? '#fff' : ' #474d90')};
  text-decoration: none;

  @media screen and (max-width: 900px) {
    flex: 0;
  }
`;

const NavigatorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: 3vw;
  min-width: 340px;
  max-width: 490px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-right: 2vw;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavigationButton = styled(Link)`
  display: inline-flex;
  font-size: 1.05em;
  font-weight: 400;
  color: ${props => (props.path === '/' ? '#fff' : ' #474d90')};
  text-decoration: none;
  justify-content: center;
  letter-spacing: 1.5px;
`;

const SearchButton = styled.button`
  color: ${props => (props.path === '/' ? '#fff' : ' #474d90')};
  outline: none;
  margin-right: 2vw;

  @media screen and (max-width: 900px) {
    margin-right: 3vw;
  }
`;

const MenuIconButton = styled.button`
  display: none;
  color: ${props => (props.path === '/' ? '#fff' : ' #474d90')};
  outline: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const LoginRegButton = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MenuSearchWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const SearchPopupWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  align-items: center;
  background-color: #474d90;
  padding: 1.5em 60px;
  width: 100%;
  z-index: 1;
  ${'' /* animation: go-top-bottom 4s infinite alternate;

  @keyframes go-top-bottom {
    to {
      top: 0;
    }
  } */};
`;

const SearchPopupFieldWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  float: right;
`;

const SearchPopupInputForm = styled.input`
  height: 100%;
  font-size: 1.3em;
  margin-left: 1vw;
  outline: none;
  color: #fff;
  &::-webkit-input-placeholder {
    color: #fff;
  }
`;

const SearchPopupCloseButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
`;

const SearchPopupCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #fff;
  height: 20px;
  width: 3px;
  position: relative;
  left: 5px;
  border-radius: 20px;
  &::after {
    content: '';
    height: 3px;
    width: 20px;
    background: #fff;
    position: absolute;
    border-radius: 20px;
    left: -9px;
    top: 9px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends PureComponent {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderWrapper path={this.props.path}>
          <Logo to="/" path={this.props.path}>
            Консенсус
          </Logo>
          <NavigatorContainer>
            <NavigationButton to="/popular" path={this.props.path}>
              Популярные
            </NavigationButton>
            <NavigationButton to="/themes" path={this.props.path}>
              Тематика
            </NavigationButton>
            <NavigationButton to="/follow" path={this.props.path}>
              Подписки
            </NavigationButton>
          </NavigatorContainer>
          <MenuSearchWrapper>
            <SearchButton>
              <SearchIcon isWhite={this.props.path === '/'} />
            </SearchButton>
            <MenuIconButton>
              <MenuIcon isWhite={this.props.path === '/'} />
            </MenuIconButton>
          </MenuSearchWrapper>
          <LoginRegButton>
            <ActionButton text="Вход и регистрация" />
          </LoginRegButton>
        </HeaderWrapper>
        <SearchPopupWrapper>
          <SearchPopupFieldWrapper>
            <SearchIcon isWhite />
            <SearchPopupInputForm type="search" placeholder="Найти..." />
          </SearchPopupFieldWrapper>
          <SearchPopupCloseButtonWrapper>
            <SearchPopupCloseButton />
          </SearchPopupCloseButtonWrapper>
        </SearchPopupWrapper>
      </div>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
