import React from 'react';
import * as Styles from './styles';
import Place from './1.png';

const PartnersBlock = () => (
  <Styles.PartnersCellWrapper to="some">
    <Styles.PartnersBlockWrapper>
      <Styles.PartnersBlockDescriptionWrapper>
        <Styles.PartnersBlockDescriptionNameWrapper>
          <Styles.PartnersBlockDescriptionName>
            Trump
          </Styles.PartnersBlockDescriptionName>
          <Styles.PartnersBlockDescriptionWork>
            Косплеер
          </Styles.PartnersBlockDescriptionWork>
        </Styles.PartnersBlockDescriptionNameWrapper>
        <Styles.PartnersBlockDescription>
          Косплейщик из США. Он начал заниматься косплеями в 2017 году после
          избрания его президентом.
        </Styles.PartnersBlockDescription>
        <Styles.PartnersBlockDescription>
          Ведет блог о косплее в Твиттере.
        </Styles.PartnersBlockDescription>
      </Styles.PartnersBlockDescriptionWrapper>
      <Styles.PartnersBlockImage
        src={Place}
        alt=""
        style={{ width: '300px', height: '500px' }}
      />
    </Styles.PartnersBlockWrapper>
  </Styles.PartnersCellWrapper>
);

export default PartnersBlock;
