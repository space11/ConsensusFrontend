import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PartnersCell from '../PartnersCell';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

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
  margin-bottom: 50px;
  font-size: 2.4em;
  letter-spacing: 2px;
  @media screen and (max-width: 654px) {
    justify-content: center;
    text-align: center;
  }
`;

class PartnersBlock extends PureComponent {
  render() {
    return (
      <Partners>
        <PartnersBlockTitle>Наши партнеры</PartnersBlockTitle>
        <PartnersBlockWrapper>
          <PartnersCell />
          <PartnersCell />
          <PartnersCell />
        </PartnersBlockWrapper>
      </Partners>
    );
  }
}

export default PartnersBlock;
