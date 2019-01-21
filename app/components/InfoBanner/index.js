import React from 'react';
import Banner from 'images/info/background.svg';
import AlienOctopus from 'images/info/alienOctopus.svg';
import AlienSad from 'images/info/alienSad.svg';
import {
  InfoWrapper,
  AlienWrapper,
  AlienWrapperBottom,
  Background,
} from './styles';

const InfoBanner = () => (
  <InfoWrapper>
    <AlienWrapper>
      <img src={AlienOctopus} alt="" />
    </AlienWrapper>
    <AlienWrapperBottom>
      <img src={AlienSad} alt="" />
    </AlienWrapperBottom>
    <Background src={Banner} alt="" />
  </InfoWrapper>
);

export default InfoBanner;
