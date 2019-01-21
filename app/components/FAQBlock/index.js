import React from 'react';
import Background from 'images/faqbanner/background.svg';
import AlienHuman from 'images/faqbanner/alienHuman.svg';
import AlienGray from 'images/faqbanner/alienGray.svg';
import AlienFooter from 'images/faqbanner/alienFooter.svg';
import { FaqLine } from './components/line';
import Button from '../Button';
import {
  FaqBlockWrapper,
  HumanWrapper,
  GrayWrapper,
  AnchorWrapper,
  BackgroundWrapper,
  ContentWrapper,
  Title,
  Description,
  Link,
  LinePairWrapper,
  LinesWrapper,
  FooterWrapper,
  MainContentWrapper,
} from './styles';

const FaqBlock = () => (
  <FaqBlockWrapper>
    <MainContentWrapper>
      <AnchorWrapper>
        <GrayWrapper>
          <img src={AlienGray} alt="" />
        </GrayWrapper>
        <Button
          text="Организовать дебаты"
          onClick={() => {
            window.location.href = '/create-debate';
          }}
          style={{ alignSelf: 'flex-end', position: 'absolute' }}
        />
        <ContentWrapper>
          <Title>Часто задаваемые вопросы</Title>
          <Description>
            Мы уверены, что у вас есть вопросы. Ниже приведен список наиболее
            часто задаваемых вопросов. Если вы не видите свой вопрос,
            пожалуйста, не стесняйтесь{' '}
            <Link to="/contacts">обращаться к нам</Link>
          </Description>
          <LinesWrapper>
            <LinePairWrapper>
              <FaqLine title="Как запустить стрим?" />
              <FaqLine title="Как запустить стрим?" />
            </LinePairWrapper>
            <LinePairWrapper>
              <FaqLine title="Как запустить стрим?" />
              <FaqLine title="Как запустить стрим?" />
            </LinePairWrapper>
            <LinePairWrapper>
              <FaqLine title="Как запустить стрим?" />
              <FaqLine title="Как запустить стрим?" />
            </LinePairWrapper>
          </LinesWrapper>
        </ContentWrapper>
        <HumanWrapper>
          <img src={AlienHuman} alt="" />
        </HumanWrapper>
      </AnchorWrapper>
      <FooterWrapper>
        <img src={AlienFooter} alt="" />
      </FooterWrapper>
    </MainContentWrapper>
    <BackgroundWrapper src={Background} alt="" />
  </FaqBlockWrapper>
);

export default FaqBlock;
