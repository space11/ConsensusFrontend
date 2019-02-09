import React, { Component } from 'react';
import * as Styles from './styles';

/* eslint-disable */

class SearchPage extends Component {
  render() {
    return (
      <Styles.SearchPageWrapper>
        <Styles.ControlWrapper>
        <Styles.InputWrapper>
          <Styles.Label htmlFor="search">Поиск названию или пользователю</Styles.Label>
          <Styles.Input id="search" width="394px" />
          </Styles.InputWrapper>
        </Styles.ControlWrapper>
      </Styles.SearchPageWrapper>
    );
  }
}

export default SearchPage;
