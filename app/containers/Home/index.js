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
    <Space size={10} />
    <VideoBlock live title="Сейчас в эфире" />
    <InfoBannerStyle>
      <Space size={10} />
      <InfoBanner />
    </InfoBannerStyle>
    <Space size={10} />
    <VideoBlock title="Прошедшие дебаты" />
    <Space size={10} />
    <InfoBannerStyle>
      <FaqBlock />
      <Space size={10} />
    </InfoBannerStyle>
  </HomePageWrapper>
);

export default HomePage;
