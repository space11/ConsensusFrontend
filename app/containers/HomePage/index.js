import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import VideoBlock from '../../components/VideoBlock';
import InfoBanner from '../../components/InfoBanner';
import TopBlock from '../../components/TopBlock';
import FaqBlock from '../../components/FAQBlock';
import PartnersBlock from '../../components/PartnersBlock';
import AnchorBlock from '../../components/AnchorBlock';
import Space from '../../components/Space';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const InfoBannerStyle = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class HomePage extends PureComponent {
  render() {
    return (
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
        <TopBlock />
        <Space size={10} />
        <InfoBannerStyle>
          <FaqBlock />
          <Space size={10} />
        </InfoBannerStyle>
        <PartnersBlock />
        <Space size={10} />
        <AnchorBlock />
      </HomePageWrapper>
    );
  }
}

export default HomePage;
