import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Background from '../../images/FaqBanner/bg';
import AlienHuman from '../../images/FaqBanner/AlienHuman';
import AlienGrey from '../../images/FaqBanner/AlienGrey';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const FaqBlockWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10vw;
`;

const FaqBlockGreyWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  align-items: flex-end;
  bottom: 0;
  padding: 0 5vw;

  animation: go-top-bottom 4s infinite alternate;

  @keyframes go-top-bottom {
    from {
      bottom: -5px;
    }
    to {
      bottom: 5px;
    }
  }
`;

const FaqBlockHuman = styled.div`
  position: absolute;
  padding: 0 5vw;
  right: 0;

  animation: go-top-bottom 4s infinite alternate;

  @keyframes go-top-bottom {
    from {
      top: -5px;
    }
    to {
      top: 5px;
    }
  }
`;

const FaqBlockContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 64em;
  margin-top: 5vw;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const FaqBlockQuestionsTitle = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 1.6em;
  letter-spacing: 0.5px;
  text-align: center;
`;

class FaqBlock extends PureComponent {
  render() {
    return (
      <FaqBlockWrapper>
        <Background />
        <FaqBlockGreyWrapper>
          <AlienGrey />
        </FaqBlockGreyWrapper>
        <FaqBlockContent>
          <FaqBlockQuestionsTitle>
            Часто задаваемые вопросы
          </FaqBlockQuestionsTitle>
        </FaqBlockContent>
        <FaqBlockHuman>
          <AlienHuman />
        </FaqBlockHuman>
      </FaqBlockWrapper>
    );
  }
}

export default FaqBlock;
