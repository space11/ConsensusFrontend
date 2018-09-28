import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Banner from '../../images/InfoBanner/bg';
import AlienSup from '../../images/InfoBanner/AlienSup';
import AlienSad from '../../images/InfoBanner/AlienSad';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  width: 100%;
  justify-content: space-between;
`;

const AlienWrapper = styled.div`
  position: absolute;
  padding: 20px;
  animation: go-top-bottom 3s infinite alternate;
  z-index: 99999;

  @keyframes go-top-bottom {
    from {
      top: -10px;
    }
    to {
      top: 10px;
    }
  }
`;

const AlienWrapperBottom = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  padding: 20px;
  right: 0;
  height: 100%;
  z-index: 99999;

  animation: go-top-bottom 4s infinite alternate;

  @keyframes go-top-bottom {
    from {
      top: -12px;
    }
    to {
      top: 12px;
    }
  }
`;

class InfoBanner extends PureComponent {
  render() {
    return (
      <InfoWrapper>
        <AlienWrapper>
          <AlienSup />
        </AlienWrapper>
        <AlienWrapperBottom>
          <AlienSad />
        </AlienWrapperBottom>
        <Parallax offsetYMin={-10} offsetYMax={10}>
          <Banner />
        </Parallax>
      </InfoWrapper>
    );
  }
}

export default InfoBanner;
