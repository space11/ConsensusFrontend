import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Background from '../../images/FaqBanner/bg';
import AlienHuman from '../../images/FaqBanner/AlienHuman';
import AlienGrey from '../../images/FaqBanner/AlienGrey';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';
import QuestionCell from '../QuestionCell';

const FaqBlockWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FaqBlockGreyWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  align-items: flex-end;
  bottom: 0;
  padding: 0 2vw;

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
  padding: 0 2vw;
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
  flex-direction: column;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const FaqBlockQuestionsTitle = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 1.7em;
  margin-top: 9vw;
  letter-spacing: 0.5px;
  margin-bottom: 1vw;
  text-align: center;
  width: 100%;
`;

const FaqBlockQuestionsDescription = styled.div`
  width: 48%;
  color: #fff;
  font-size: 1em;
  opacity: 0.8;
  justify-self: center;
  align-self: center;
  text-align: center;
`;

const FaqBlockQuestionsLink = styled.a`
  width: 48%;
  color: #4a90e2;
  font-size: 1em;
  justify-self: center;
  align-self: center;
  text-align: center;
`;

const FaqBlockQuestionsGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FaqBlockQuestionsGridSide = styled.div`
  display: flex;
  flex-direction: column;
  float: ${props => (props.isRight ? 'right' : 'left')};
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
          <FaqBlockQuestionsDescription>
            Мы уверены, что у вас есть вопросы. Ниже приведен список наиболее
            часто задаваемых вопросов. Если вы не видите свой вопрос,
            пожалуйста, не стесняйтесь
          </FaqBlockQuestionsDescription>
          <FaqBlockQuestionsLink>обращаться к нам.</FaqBlockQuestionsLink>
          <FaqBlockQuestionsGrid>
            <FaqBlockQuestionsGridSide>
              <QuestionCell />
              <QuestionCell />
              <QuestionCell />
            </FaqBlockQuestionsGridSide>
            <FaqBlockQuestionsGridSide isRight>
              <QuestionCell />
              <QuestionCell />
              <QuestionCell />
            </FaqBlockQuestionsGridSide>
          </FaqBlockQuestionsGrid>
        </FaqBlockContent>
        <FaqBlockHuman>
          <AlienHuman />
        </FaqBlockHuman>
      </FaqBlockWrapper>
    );
  }
}

export default FaqBlock;
