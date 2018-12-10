import React, { PureComponent } from 'react';
import Img from 'react-image';
import styled from 'styled-components';
import { hideOn, media } from 'utils/helpers';
import { unit } from 'utils/constants';
import cross from 'images/partners/cross.svg';
import PartnersCell from '../PartnersCell';
import Space from '../Space';

const PartnersBlockWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 654px) {
    justify-content: center;
  }
`;

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 64em;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};

  @media screen and (max-width: 654px) {
    justify-content: center;
  }
`;

const PartnersBlockTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 2.4em;
  letter-spacing: 2px;
  @media screen and (max-width: 654px) {
    justify-content: center;
    text-align: center;
  }
`;

const PartnersBlockCrossButton = styled(Img)``;

class PartnersBlock extends PureComponent { // eslint-disable-line
  render() {
    return (
      <Partners>
        <PartnersBlockTitle>Наши партнеры</PartnersBlockTitle>
        <Space size={4} />
        <PartnersBlockWrapper>
          <PartnersBlockCrossButton img={cross} alt="" />
          <PartnersCell />
          <PartnersCell />
          <PartnersCell />
          <PartnersBlockCrossButton
            img={cross}
            alt=""
            style={{ transform: 'scale(-1, 1)' }}
          />
        </PartnersBlockWrapper>
      </Partners>
    );
  }
}

export default PartnersBlock;
