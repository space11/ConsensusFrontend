import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NickBlockWrapper = styled.a`
  display: flex;
`;

const NameBlock = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 40px;
  color: #000000;
`;

class NickBlock extends PureComponent {
  render() {
    return (
      <NickBlockWrapper href={this.props.url}>
        <NameBlock>{this.props.nickname}</NameBlock>
      </NickBlockWrapper>
    );
  }
}

NickBlock.propTypes = {
  nickname: PropTypes.string,
  url: PropTypes.string,
};

export default NickBlock;
