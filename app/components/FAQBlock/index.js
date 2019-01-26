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
import * as Styles from './styles';

const FaqBlock = () => (
  <Styles.FaqBlockWrapper>
    <Styles.MainContentWrapper>
      <Styles.AnchorWrapper>
        <Styles.GrayWrapper>
          <img src={AlienGray} alt="" />
        </Styles.GrayWrapper>
        <Styles.ContentWrapper>
          <div>
            <Styles.Title>Часто задаваемые вопросы</Styles.Title>
            <Styles.Description>
              Мы уверены, что у вас есть вопросы. Ниже приведен список наиболее
              часто задаваемых вопросов. Если вы не видите свой вопрос,
              пожалуйста, не стесняйтесь{' '}
              <Styles.Link to="/contacts">обращаться к нам</Styles.Link>
            </Styles.Description>
            <Styles.LinesWrapper>
              <Styles.LinePairWrapper>
                <FaqLine title="Как запустить стрим?" />
                <FaqLine title="Как запустить стрим?" />
              </Styles.LinePairWrapper>
              <Styles.LinePairWrapper>
                <FaqLine title="Как запустить стрим?" />
                <FaqLine title="Как запустить стрим?" />
              </Styles.LinePairWrapper>
              <Styles.LinePairWrapper>
                <FaqLine title="Как запустить стрим?" />
                <FaqLine title="Как запустить стрим?" />
              </Styles.LinePairWrapper>
            </Styles.LinesWrapper>
          </div>
          <Styles.ButtonWrapper to="/create-debate">
            <Button text="Организовать дебаты" />
          </Styles.ButtonWrapper>
        </Styles.ContentWrapper>
        <Styles.HumanWrapper>
          <img src={AlienHuman} alt="" />
        </Styles.HumanWrapper>
      </Styles.AnchorWrapper>
      <Styles.FooterWrapper>
        <Styles.FooterLinkWrapper>
          <Styles.FooterLinkSmallWrapper>
            <Styles.FooterLink to="/rules">Правила</Styles.FooterLink>
            <Styles.FooterLink to="/contacts">Контакты</Styles.FooterLink>
            <Styles.FooterLink to="/advertisments">
              Рекламные возможности
            </Styles.FooterLink>
            <Styles.FooterLink to="/user-agreement">
              Пользовательское соглашение
            </Styles.FooterLink>
          </Styles.FooterLinkSmallWrapper>
          <Styles.FooterLinkSocialWrapper>
            <Styles.FooterSocial>
              <Styles.Social src={Vk} alt="" />
              <Styles.Social src={Facebook} alt="" />
              <Styles.Social src={Twitter} alt="" />
              <Styles.Social src={Instagram} alt="" />
            </Styles.FooterSocial>
            <Styles.FooterLinkSmallWrapper>
              <Styles.SocialLink href="vk.com">VK</Styles.SocialLink>
              <Styles.SocialLink href="facebook.com">
                FACEBOOK
              </Styles.SocialLink>
              <Styles.SocialLink href="twitter.com">TWITTER</Styles.SocialLink>
              <Styles.SocialLink href="instagram.com">
                INSTAGRAM
              </Styles.SocialLink>
            </Styles.FooterLinkSmallWrapper>
          </Styles.FooterLinkSocialWrapper>
        </Styles.FooterLinkWrapper>
        <Styles.AlienFooterImage src={AlienFooter} alt="" />
        <Styles.Copyright>© League Of Developers 2018</Styles.Copyright>
      </Styles.FooterWrapper>
    </Styles.MainContentWrapper>
    <Styles.BackgroundWrapper src={Background} alt="" />
  </Styles.FaqBlockWrapper>
);

export default FaqBlock;
