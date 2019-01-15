import React from 'react';
import Background from 'images/faqbanner/background';
import AlienHuman from 'images/faqbanner/alienHuman';
import AlienGrey from 'images/faqbanner/alienGrey';
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
import {
  FaqBlockWrapper,
  FaqBlockGreyWrapper,
  FaqBlockHuman,
  FaqBlockContent,
  FaqBlockQuestionsTitle,
  FaqBlockQuestionsDescription,
  FaqBlockQuestionsLink,
  FaqBlockQuestionsGrid,
  FaqBlockQuestionsGridSide,
} from './styles';

const FaqBlock = () => (
  <FaqBlockWrapper>
    <Background />
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
          <QuestionCell title={queone.title} description={queone.description} />
          <QuestionCell title={quetwo.title} description={quetwo.description} />
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
          <QuestionCell title={quesix.title} description={quesix.description} />
        </FaqBlockQuestionsGridSide>
      </FaqBlockQuestionsGrid>
    </FaqBlockContent>
    <FaqBlockHuman>
      <AlienHuman />
    </FaqBlockHuman>
  </FaqBlockWrapper>
);

export default FaqBlock;
