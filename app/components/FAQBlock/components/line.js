import React from 'react';
import PropTypes from 'prop-types';
import Plus from 'images/faqbanner/controls/plus.svg';
import { LineWrapper, LineTitle, PlusButton } from './styles';

export const FaqLine = ({ title }) => (
  <LineWrapper>
    <LineTitle>{title}</LineTitle>
    <PlusButton>
      <img src={Plus} alt="" />
    </PlusButton>
  </LineWrapper>
);

FaqLine.propTypes = {
  title: PropTypes.string,
};
