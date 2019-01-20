import React from 'react';
import Banner from 'components/Banner';
import VideoBlock from 'components/VideoBlock';
import InfoBanner from 'components/InfoBanner';
import FaqBlock from 'components/FAQBlock';
import Space from 'components/Space';
import { HomePageWrapper, InfoBannerStyle } from './styles';

const HomePage = () => (
  <HomePageWrapper>
    <Banner />
    <Space />
    <VideoBlock live title="Сейчас в эфире" />
    <Space />
    <InfoBannerStyle>
      <InfoBanner />
    </InfoBannerStyle>
    <Space />
    <VideoBlock title="Прошедшие дебаты" />
    <Space />
    <InfoBannerStyle>
      <FaqBlock />
    </InfoBannerStyle>
  </HomePageWrapper>
);

export default HomePage;
