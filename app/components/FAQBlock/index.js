import React from 'react';
import Background from 'images/faqbanner/background.svg';
import AlienHuman from 'images/faqbanner/alienHuman.svg';
import AlienGray from 'images/faqbanner/alienGray.svg';
import AlienFooter from 'images/faqbanner/alienFooter.svg';
import Facebook from 'images/footer/social/facebook.svg';
import Instagram from 'images/footer/social/instagram.svg';
import Twitter from 'images/footer/social/twitter.svg';
import Vk from 'images/footer/social/vk.svg';
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
  ButtonWrapper,
  FooterLinkWrapper,
  FooterLinkSmallWrapper,
  FooterLink,
  FooterSocial,
  Social,
  SocialLink,
  FooterLinkSocialWrapper,
} from './styles';

const FaqBlock = () => (
  <FaqBlockWrapper>
    <MainContentWrapper>
      <AnchorWrapper>
        <GrayWrapper>
          <img src={AlienGray} alt="" />
        </GrayWrapper>
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
          <ButtonWrapper to="/create-debate">
            <Button text="Организовать дебаты" />
          </ButtonWrapper>
        </ContentWrapper>
        <HumanWrapper>
          <img src={AlienHuman} alt="" />
        </HumanWrapper>
      </AnchorWrapper>
      <FooterWrapper>
        <FooterLinkWrapper>
          <FooterLinkSmallWrapper>
            <FooterLink to="/rules">Правила</FooterLink>
            <FooterLink to="/contacts">Контакты</FooterLink>
            <FooterLink to="/advertisments">Рекламные возможности</FooterLink>
            <FooterLink to="/user-agreement">
              Пользовательское соглашение
            </FooterLink>
          </FooterLinkSmallWrapper>
          <FooterLinkSocialWrapper>
            <FooterSocial>
              <Social src={Vk} alt="" />
              <Social src={Facebook} alt="" />
              <Social src={Twitter} alt="" />
              <Social src={Instagram} alt="" />
            </FooterSocial>
            <FooterLinkSmallWrapper>
              <SocialLink href="vk.com">VK</SocialLink>
              <SocialLink href="facebook.com">FACEBOOK</SocialLink>
              <SocialLink href="twitter.com">TWITTER</SocialLink>
              <SocialLink href="instagram.com">INSTAGRAM</SocialLink>
            </FooterLinkSmallWrapper>
          </FooterLinkSocialWrapper>
        </FooterLinkWrapper>
        <img src={AlienFooter} alt="" />
      </FooterWrapper>
    </MainContentWrapper>
    <BackgroundWrapper src={Background} alt="" />
  </FaqBlockWrapper>
);

export default FaqBlock;
