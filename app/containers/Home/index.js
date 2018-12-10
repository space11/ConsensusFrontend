import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Bg from 'images/banner/background.svg';
import Banner from 'components/Banner';
import VideoBlock from 'components/VideoBlock';
import InfoBanner from 'components/InfoBanner';
import TopBlock from 'components/TopBlock';
import FaqBlock from 'components/FAQBlock';
import PartnersBlock from 'components/PartnersBlock';
import AnchorBlock from 'components/AnchorBlock';
import Space from 'components/Space';
import DebateForm from 'containers/DebateProvider/DebateForm';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const OverflowBlock = styled.div`
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const InfoBannerStyle = styled.div`
  @media screen and (max-width: 982px) {
    display: none;
  }
`;

const BannerImage = styled(Img)`
  position: relative;
  align-self: center;
  min-width: 100%;
  top: 0;
`;

/* eslint-disable react/prefer-stateless-function */
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debateForm: '',
    };
    this.showDebateForm = this.showDebateForm.bind(this);
  }

  showDebateForm() {
    if (this.state.debateForm === '')
      this.setState({
        debateForm: <DebateForm debateForm={this.showDebateForm} />,
      });
    else this.setState({ debateForm: '' });
  }

  render() {
    const { debateForm } = this.state;
    return (
      <HomePageWrapper>
        {debateForm}
        <OverflowBlock>
          <BannerImage src={Bg} alt="" />
        </OverflowBlock>
        <Banner clickDebate={this.showDebateForm} />
        <Space size={10} />
        <VideoBlock live title="Сейчас в эфире" />
        <InfoBannerStyle>
          <Space size={10} />
          <InfoBanner />
        </InfoBannerStyle>
        <Space size={10} />
        <VideoBlock title="Прошедшие дебаты" />
        <Space size={10} />
        <TopBlock />
        <Space size={10} />
        <InfoBannerStyle>
          <FaqBlock />
          <Space size={10} />
        </InfoBannerStyle>
        <PartnersBlock />
        <Space size={10} />
        <AnchorBlock clickDebate={this.showDebateForm} />
      </HomePageWrapper>
    );
  }
}

export default connect(
  () => ({}),
  () => ({}),
)(HomePage);
