import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Background from 'images/faqbanner/background';
import AlienHuman from 'images/faqbanner/alienHuman';
import AlienGrey from 'images/faqbanner/alienGrey';
import { hideOn, media } from 'utils/helpers';
import { unit } from 'utils/constants';
import QuestionCell from '../QuestionCell';
import {
  queone,
  quetwo,
  quethree,
  quefour,
  quefive,
  quesix,
  description,
} from './messages';

const FaqBlockWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FaqBlockGreyWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  align-items: flex-end;
  bottom: -60px;
  padding: 0 2vw;

  animation: go-top-bottom 4s infinite alternate;

  @keyframes go-top-bottom {
    0% {
      transform: translateY(-2%);
    }
    100% {
      transform: translateY(2%);
    }
  }
`;

const FaqBlockHuman = styled.div`
  position: absolute;
  top: 122px;
  padding: 0 2vw;
  right: 0;

  animation: go-top-bottom 4s infinite alternate;

  @keyframes go-top-bottom {
    0% {
      transform: translateY(-2%);
    }
    100% {
      transform: translateY(2%);
    }
  }
`;

const FaqBlockContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 5vh;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const FaqBlockQuestionsTitle = styled.div`
  color: #fff;
  margin-top: 122px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 30px;
  letter-spacing: 0.625px;
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
  color: #4a90e2;
  font-size: 1em;
  justify-self: center;
  align-self: center;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #3f9eda;
  }
`;

const FaqBlockQuestionsGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
`;

const FaqBlockQuestionsGridSide = styled.div`
  display: flex;
  flex-direction: column;
  float: ${props => (props.isRight ? 'right' : 'left')};
  justify-content: space-between;
`;

class FaqBlock extends PureComponent { //eslint-disable-line
  render() {
    return (
      <FaqBlockWrapper>
        <Parallax offsetYMin={-12} offsetYMax={12}>
          <Background />
        </Parallax>
        <FaqBlockGreyWrapper>
          <AlienGrey />
        </FaqBlockGreyWrapper>
        <FaqBlockContent>
          <FaqBlockQuestionsTitle>{description.title}</FaqBlockQuestionsTitle>
          <FaqBlockQuestionsDescription>
            {description.text}
          </FaqBlockQuestionsDescription>
          <FaqBlockQuestionsLink>обращаться к нам.</FaqBlockQuestionsLink>
          <FaqBlockQuestionsGrid>
            <FaqBlockQuestionsGridSide>
              <QuestionCell
                title={queone.title}
                description={queone.description}
              />
              <QuestionCell
                title={quetwo.title}
                description={quetwo.description}
              />
              <QuestionCell
                title={quethree.title}
                description={quethree.description}
              />
            </FaqBlockQuestionsGridSide>
            <FaqBlockQuestionsGridSide isRight>
              <QuestionCell
                title={quefour.title}
                description={quefour.description}
              />
              <QuestionCell
                title={quefive.title}
                description={quefive.description}
              />
              <QuestionCell
                title={quesix.title}
                description={quesix.description}
              />
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
