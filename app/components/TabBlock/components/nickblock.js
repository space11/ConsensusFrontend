import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NickBlockWrapper = styled.a`
  display: flex;
  flex-direction: ${props => (props.isRight ? 'row-reverse' : 'row')};
`;

const AvaBlockWrapper = styled.div`
  margin-right: ${props => (props.isRight ? '0' : '10px')};
  margin-left: ${props => (props.isRight ? '10px' : '0')};
`;

const NameBlock = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 2.5em;
  color: #4a4a4a;

  animation: ${props =>
    props.isTalk ? 'color-change 3s infinite ease-in-out' : ''};

  @keyframes color-change {
    0% {
      color: #f7567c;
    }
    50% {
      color: #4e5f92;
    }
    100% {
      color: #4a4a4a;
    }
  }
`;

class NickBlock extends PureComponent {
  render() {
    return (
      <NickBlockWrapper isRight={this.props.isRight} href={this.props.url}>
        <AvaBlockWrapper isRight={this.props.isRight}>
          {this.props.avatar}
        </AvaBlockWrapper>
        <NameBlock isTalk={this.props.isTalk}>{this.props.nickname}</NameBlock>
      </NickBlockWrapper>
    );
  }
}

NickBlock.propTypes = {
  nickname: PropTypes.string,
  avatar: PropTypes.any,
  url: PropTypes.string,
  isRight: PropTypes.bool,
  isTalk: PropTypes.bool,
};

export default NickBlock;
