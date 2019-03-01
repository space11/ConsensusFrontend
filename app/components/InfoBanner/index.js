import React from 'react';
import Banner from 'images/info/background.svg';
import * as Styles from './styles';

const InfoBanner = () => (
  <Styles.InfoWrapper>
    <Styles.Background src={Banner} alt="" />
  </Styles.InfoWrapper>
);

export default InfoBanner;
