import React from 'react';
import Banner from 'images/info/background.svg';
import AlienOctopus from 'images/info/alienOctopus.svg';
import AlienSad from 'images/info/alienSad.svg';
import * as Styles from './styles';

const InfoBanner = () => (
  <Styles.InfoWrapper>
    <Styles.AlienWrapper>
      <img src={AlienOctopus} alt="" />
    </Styles.AlienWrapper>
    <Styles.AlienWrapperBottom>
      <img src={AlienSad} alt="" />
    </Styles.AlienWrapperBottom>
    <Styles.Background src={Banner} alt="" />
  </Styles.InfoWrapper>
);

export default InfoBanner;
