import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Banner from 'images/info/background';
import AlienOctopus from 'images/info/alienOctopus';
import AlienSad from 'images/info/alienSad';
import { InfoWrapper, AlienWrapper, AlienWrapperBottom } from './styles';

const InfoBanner = () => (
  <InfoWrapper>
    <AlienWrapper>
      <AlienOctopus />
    </AlienWrapper>
    <AlienWrapperBottom>
      <AlienSad />
    </AlienWrapperBottom>
    <Parallax offsetYMin={-10} offsetYMax={10}>
      <Banner />
    </Parallax>
  </InfoWrapper>
);

export default InfoBanner;
