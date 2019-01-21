import React from 'react';
import Banner from 'components/Banner';
import VideoBlock from 'components/VideoBlock';
import InfoBanner from 'components/InfoBanner';
import FaqBlock from 'components/FAQBlock';
import Space from 'components/Space';
import { HomePageWrapper } from './styles';

const HomePage = () => (
  <HomePageWrapper>
    <Banner />
    <Space />
    <VideoBlock live title="Сейчас в эфире" />
    <Space />
    <InfoBanner />
    <Space />
    <VideoBlock title="Прошедшие дебаты" />
    <Space />
    <FaqBlock />
  </HomePageWrapper>
);

export default HomePage;
