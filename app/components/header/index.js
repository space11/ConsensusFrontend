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
  padding: 1.5em 4em;
  align-items: center;
  justify-content: space-between;
  background: ${props => (props.path === '/' ? '#1f254a' : 'transparent')};
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    padding: 1.5em 3em;
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
  transition: 0.3s;

  &:hover {
    color: #80bff5;
  }

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
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #80bff5;
  }
`;

const SearchButton = styled.button`
  color: ${props => (props.path === '/' ? '#fff' : ' #474d90')};
  outline: none;
  margin-right: 2vw;

  @media screen and (max-width: 900px) {
    margin-right: 3vw;
  }

  &:hover {
    transform: scale(1.1);
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
  top: ${props => props.top}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.shown ? '#20244c' : 'transparent')};
  padding: 1.5em 4em;
  box-shadow: ${props => (props.shown ? '0 3px 10px #000' : '')};
  width: 100%;
  z-index: 9990;
  overflow: hidden;
  transition: 0.5s;

  @media screen and (max-width: 900px) {
    padding: 1.5em 3em;
  }
`;

const SearchPopupFieldWrapper = styled.div`
  display: ${props => (props.shown ? 'flex' : 'none')};
  align-items: center;
  float: right;
  width: 100%;
`;

const SearchPopupInputForm = styled.input`
  font-size: 1.5em;
  margin-left: 1em;
  margin-right: 1em;
  outline: none;
  width: 100%;
  color: #fff;
  &::-webkit-input-placeholder {
    color: #fff;
  }
`;

const SearchPopupCloseButtonWrapper = styled.button`
  display: ${props => (props.shown ? 'flex' : 'none')};
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
  background: #fff;
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
    background: #fff;
    position: absolute;
    border-radius: 20px;
    left: -9px;
    top: 9px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      top: props.top || 0,
      shown: false,
    };
    this.showSearchBlock = this.showSearchBlock.bind(this);
  }

  showSearchBlock() {
    if (this.state.top === 0) {
      this.setState({ top: 100 });
    } else {
      this.setState({ top: 0 });
    }
    if (this.state.shown) {
      this.setState({ shown: false });
    } else {
      this.setState({ shown: true });
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
        }}
      >
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
            <SearchButton onClick={this.showSearchBlock}>
              <SearchIcon isWhite={this.props.path === '/'} />
            </SearchButton>
            <MenuIconButton>
              <MenuIcon isWhite={this.props.path === '/'} />
            </MenuIconButton>
          </MenuSearchWrapper>
          <LoginRegButton>
            <ActionButton text="Вход и регистрация" url="/register" />
          </LoginRegButton>
        </HeaderWrapper>
        <SearchPopupWrapper top={this.state.top} shown={this.state.shown}>
          <SearchPopupFieldWrapper shown={this.state.shown}>
            <SearchIcon isWhite />
            <SearchPopupInputForm type="search" placeholder="Найти..." />
          </SearchPopupFieldWrapper>
          <SearchPopupCloseButtonWrapper
            onClick={this.showSearchBlock}
            shown={this.state.shown}
          >
            <SearchPopupCloseButton />
          </SearchPopupCloseButtonWrapper>
        </SearchPopupWrapper>
      </div>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string,
  top: PropTypes.number,
};

export default Header;
