import React from 'react';
import Banner from 'images/info/background';
import AlienOctopus from 'images/info/alienOctopus.svg';
import AlienSad from 'images/info/alienSad.svg';
import { InfoWrapper, AlienWrapper, AlienWrapperBottom } from './styles';

const InfoBanner = () => (
  <InfoWrapper>
    <AlienWrapper>
      <img src={AlienOctopus} alt="" />
    </AlienWrapper>
    <AlienWrapperBottom>
      <img src={AlienSad} alt="" />
    </AlienWrapperBottom>
    <Banner />
  </InfoWrapper>
);

export default InfoBanner;
