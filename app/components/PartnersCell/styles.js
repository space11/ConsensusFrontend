import { slideOutRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const flipAnimation = keyframes`${slideOutRight}`;

export const PartnersCellWrapper = styled(NavLink)`
  height: 32rem;
  text-decoration: none;
`;

export const PartnersBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  min-height: 500px;
  background-image: linear-gradient(to bottom, #20244c, #2b3780);
  color: #fff;
  border-radius: 5px;
  -webkit-user-select: none;
`;

export const PartnersBlockImage = styled.img`
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

export const PartnersBlockDescriptionWrapper = styled.div`
  max-width: 263px;
  margin: auto;
`;

export const PartnersBlockDescriptionNameWrapper = styled.div`
  text-align: center;
  margin-bottom: 12vw;
`;

export const PartnersBlockDescriptionName = styled.div`
  font-weight: 500;
  font-size: 1.3em;
`;

export const PartnersBlockDescriptionWork = styled.div`
  letter-spacing: 2px;
  font-size: 1.3em;
  font-weight: 300;
`;

export const PartnersBlockDescription = styled.div`
  text-align: center;
  font-weight: 300;
  margin-bottom: 10px;
`;
