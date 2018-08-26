import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Background from '../../images/FaqBanner/bg';

const FaqBlockWrapper = styled.div`
  margin-bottom: 10vw;
`;

class FaqBlock extends PureComponent {
  render() {
    return (
      <FaqBlockWrapper>
        <Background />
      </FaqBlockWrapper>
    );
  }
}

export default FaqBlock;
