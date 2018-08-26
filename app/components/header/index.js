import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from 'images/SearchIcon';
import ActionButton from '../ActionButton';

const HeaderWrapper = styled.div`
  display: flex;
  z-index: 9999;
  position: relative;
  width: 100%;
  height: auto;
  padding: 1.5em 60px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  display: inline-flex;
  font-size: 1.9em;
  flex: 1;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: ${props => (props.path === '/' ? '#fff' : ' #474d90')};
  text-decoration: none;
`;

const NavigatorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 3vw;
  min-width: 220px;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
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
  outline: none;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends PureComponent {
  render() {
    return (
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
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </NavigatorContainer>
        <ActionButton text="Вход и регистрация" />
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
