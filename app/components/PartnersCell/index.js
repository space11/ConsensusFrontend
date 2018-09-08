import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PartnersCellWrapper = styled(Link)`
  height: 32rem;
  text-decoration: none;
`;

const PartnersBlockWrapper = styled.div`
  display: flex;
  min-width: 300px;
  min-height: 500px;
  width: 20%;
  background-image: linear-gradient(to bottom, #20244c, #2b3780);
  color: #fff;
  border-radius: 5px;
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none;
`;

const PartnersBlockImage = styled.img``;

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
  font-weight: 200;
  margin-bottom: 10px;
`;

class PartnersBlock extends PureComponent {
  constructor(props) {
    super(props);

    this.showOnFocus = this.showOnFocus.bind(this);
  }

  showOnFocus() {
    console.log('ajiosdoiajios');
  }

  render() {
    return (
      <PartnersCellWrapper to="some">
        <PartnersBlockWrapper>
          <PartnersBlockImage src="../../images/placeholder.png" alt="" />
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
        </PartnersBlockWrapper>
      </PartnersCellWrapper>
    );
  }
}

export default PartnersBlock;
