import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import Place from './1.png';

const PartnersCellWrapper = styled(Link)`
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

const PartnersBlockImage = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  min-height: 500px;
  background-image: linear-gradient(to bottom, #20244c, #2b3780);
  color: #fff;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0;
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

class PartnersBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
    };
  }
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
          <PartnersBlockImage>
            <Img
              src={Place}
              alt=""
              style={{
                width: '300px',
                height: '500px',
                borderRadius: '5px',
              }}
            />
          </PartnersBlockImage>
        </PartnersBlockWrapper>
      </PartnersCellWrapper>
    );
  }
}

export default PartnersBlock;
