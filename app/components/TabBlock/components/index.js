import React from 'react';
import PropTypes from 'prop-types';
import { NickBlockWrapper, NameBlock } from './styles';

const NickBlock = ({ url, nickname }) => (
  <NickBlockWrapper href={url}>
    <NameBlock>{nickname}</NameBlock>
  </NickBlockWrapper>
);

NickBlock.propTypes = {
  nickname: PropTypes.string,
  url: PropTypes.string,
};

export default NickBlock;
