import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import NowBlock from '../../components/NowBlock';
import InfoBanner from '../../components/InfoBanner';
import PassedBlock from '../../components/PassedBlock';
import TopBlock from '../../components/TopBlock';
import FaqBlock from '../../components/FAQBlock';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  render() {
    return (
      <HomePageWrapper>
        <Banner />
        <NowBlock />
        <InfoBanner />
        <PassedBlock />
        <TopBlock />
        <FaqBlock />
      </HomePageWrapper>
    );
  }
}
