import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Content from 'components/Content';
import star from 'images/search/stars.svg';
import Space from 'components/Space';
import ProfileCell from 'components/ProfileCell';
import VideoBlockSmall from 'components/VideoBlockSmall';
import Placeholder from 'images/placeholders/1.png';

const GlobalStyle = createGlobalStyle`
  #app {
    background-image: linear-gradient(to bottom, #20244c, #2b3780);
  }
`;

const Stars = styled.img`
  position: absolute;
  min-width: 70%;
  height: 70%;
  top: 0;
  z-index: 1;
`;

const SearchWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  height: calc(100vh -10%);
  top: 0;
`;

const StarsWrapper = styled.div`
  position: absolute;
  height: 90%;
  min-width: 90%;
  top: 0;
  align-self: center;
  overflow: hidden;
  z-index: 1;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  background: #20244c;
  padding: 2rem;
  box-shadow: 0 3px 10px #000;
  width: 60vw;
  margin: 1rem 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ContentBlock = styled(Content)`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  z-index: 9999;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2vh;
  width: 100%;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.h3`
  color: #fff;
`;

const CountBlock = styled.h4`
  background: #7ea4d0;
  height: 100%;
  color: #fff;
  border-radius: 0.8rem;
  width: 3rem;
  text-align: center;
  margin-left: 1rem;
  -webkit-user-select: none;
`;

const ProfileWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const VideoBlockMoreButton = styled.button`
  display: flex;
  color: #dadada;
  font-size: 1.5em;
  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;

const VideoBlockSmallWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 654px) {
    justify-content: center;
  }
`;

class SearchBlock extends Component { // eslint-disable-line
  render() {
    return (
      <SearchWrapper>
        <GlobalStyle />
        <StarsWrapper>
          <Stars src={star} alt="" />
          <Stars src={star} alt="" style={{ transform: 'scale(-1,-1)' }} />
        </StarsWrapper>
        <ContentBlock>
          <Block>
            <InfoWrapper>
              <TitleWrapper>
                <Title>Пользователи</Title>
                <CountBlock>1000</CountBlock>
              </TitleWrapper>
              <VideoBlockMoreButton>Показать еще</VideoBlockMoreButton>
            </InfoWrapper>
            <ProfileWrapper>
              <ProfileCell isLive name="Nagibator22" rep={228} white />
              <ProfileCell name="Richard |||" rep={282} white />
              <ProfileCell name="Kirino" rep={199} white />
              <ProfileCell isLive name="Jojo" rep={814} white />
              <ProfileCell name="Kirino" rep={199} white />
              <ProfileCell name="Kirino" rep={199} white />
            </ProfileWrapper>
          </Block>
          <Block>
            <InfoWrapper>
              <TitleWrapper>
                <Title>Дебаты</Title>
                <CountBlock>10</CountBlock>
              </TitleWrapper>
              <VideoBlockMoreButton>Показать еще</VideoBlockMoreButton>
            </InfoWrapper>
            <VideoBlockSmallWrapper>
              <VideoBlockSmall
                url="/"
                title="Выбор политического курса России: как не упустить шанс снова."
                live={this.props.live}
                names="Pynya vs Sysyan"
                theme="Политика"
                viewers="98 зрителей"
                image={Placeholder}
                white
              />
              <VideoBlockSmall
                url="/"
                title="Выбор политического курса России: как не упустить шанс снова."
                live={this.props.live}
                names="Pynya vs Sysyan"
                theme="Политика"
                viewers="98 зрителей"
                image={Placeholder}
                white
              />
              <VideoBlockSmall
                url="/"
                title="Выбор политического курса России: как не упустить шанс снова."
                live={this.props.live}
                names="Pynya vs Sysyan"
                theme="Политика"
                viewers="98 зрителей"
                image={Placeholder}
                white
              />
              <VideoBlockSmall
                url="/"
                title="Выбор политического курса России: как не упустить шанс снова."
                live={this.props.live}
                names="Pynya vs Sysyan"
                theme="Политика"
                viewers="98 зрителей"
                image={Placeholder}
                white
              />
              <VideoBlockSmall
                url="/"
                title="Выбор политического курса России: как не упустить шанс снова."
                live={this.props.live}
                names="Pynya vs Sysyan"
                theme="Политика"
                viewers="98 зрителей"
                image={Placeholder}
                white
              />
            </VideoBlockSmallWrapper>
          </Block>
          <Space size="5" />
        </ContentBlock>
      </SearchWrapper>
    );
  }
}
export default SearchBlock;
