import React, { PureComponent } from 'react';
import Banner from '../../components/Banner';
import NowBlock from '../../components/NowBlock';
import InfoBanner from '../../components/InfoBanner';
import PassedBlock from '../../components/PassedBlock';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <NowBlock />
        <InfoBanner />
        <PassedBlock />
      </div>
    );
  }
}
