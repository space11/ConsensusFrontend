import React from 'react';
import {
  PartnersCellWrapper,
  PartnersBlockWrapper,
  PartnersBlockImage,
  PartnersBlockDescriptionWrapper,
  PartnersBlockDescriptionNameWrapper,
  PartnersBlockDescriptionName,
  PartnersBlockDescriptionWork,
  PartnersBlockDescription,
} from './styles';
import Place from './1.png';

const PartnersBlock = () => (
  <PartnersCellWrapper to="some">
    <PartnersBlockWrapper>
      <PartnersBlockDescriptionWrapper>
        <PartnersBlockDescriptionNameWrapper>
          <PartnersBlockDescriptionName>Trump</PartnersBlockDescriptionName>
          <PartnersBlockDescriptionWork>Косплеер</PartnersBlockDescriptionWork>
        </PartnersBlockDescriptionNameWrapper>
        <PartnersBlockDescription>
          Косплейщик из США. Он начал заниматься косплеями в 2017 году после
          избрания его президентом.
        </PartnersBlockDescription>
        <PartnersBlockDescription>
          Ведет блог о косплее в Твиттере.
        </PartnersBlockDescription>
      </PartnersBlockDescriptionWrapper>
      <PartnersBlockImage
        src={Place}
        alt=""
        style={{ width: '300px', height: '500px' }}
      />
    </PartnersBlockWrapper>
  </PartnersCellWrapper>
);

export default PartnersBlock;
