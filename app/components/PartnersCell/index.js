import React, { PureComponent } from 'react';
import { slideOutRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Place from './1.png';

const flipAnimation = keyframes`${slideOutRight}`;

const PartnersCellWrapper = styled(NavLink)`
  height: 32rem;
  text-decoration: none;
`;

const PartnersBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  min-height: 500px;
  background-image: linear-gradient(to bottom, #20244c, #2b3780);
  color: #fff;
  border-radius: 5px;
  -webkit-user-select: none;
`;

const PartnersBlockImage = styled.img`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  min-height: 474px;
  background-image: linear-gradient(to bottom, #20244c, #2b3780);
  color: #fff;
  border-radius: 5px;
  transition: 1s;

  &:hover {
    opacity: 0;
    animation: 0.5s ${flipAnimation} forwards;
    width: 100%;
  }
`;

const PartnersBlockDescriptionWrapper = styled.div`
  max-width: 263px;
  margin: auto;
`;

const PartnersBlockDescriptionNameWrapper = styled.div`
  text-align: center;
  margin-bottom: 12vw;
`;

const PartnersBlockDescriptionName = styled.div`
  font-weight: 500;
  font-size: 1.3em;
`;

const PartnersBlockDescriptionWork = styled.div`
  letter-spacing: 2px;
  font-size: 1.3em;
  font-weight: 300;
`;

const PartnersBlockDescription = styled.div`
  text-align: center;
  font-weight: 300;
  margin-bottom: 10px;
`;

class PartnersBlock extends PureComponent { //eslint-disable-line
  render() {
    return (
      <PartnersCellWrapper to="some">
        <PartnersBlockWrapper>
          <PartnersBlockDescriptionWrapper>
            <PartnersBlockDescriptionNameWrapper>
              <PartnersBlockDescriptionName>Trump</PartnersBlockDescriptionName>
              <PartnersBlockDescriptionWork>
                Косплеер
              </PartnersBlockDescriptionWork>
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
  }
}

export default PartnersBlock;
