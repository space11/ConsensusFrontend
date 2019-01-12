import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLogout } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Background from 'images/account/background.svg';
import Camera from 'images/account/camera.svg';
import Rocket from 'images/account/rocket.svg';
import Image from './1.jpg';

const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundComponent = styled.img`
  position: absolute;
  z-index: 1;
  height: 570px;
  width: 100%;
  border-radius: 0 0 100% 100%;
  background: linear-gradient(360deg, #2b3780 0%, #2d3270 50%, #20244c 100%);
`;

const FollowLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  z-index: 3;
  top: 480px;
  margin-top: 470px;
`;

const FollowComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FollowBlock = styled.button`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 300;
  cursor: pointer;
`;

const Span = styled.span`
  font-weight: 300;
  font-size: 20px;
  -webkit-user-select: none;
`;

const ProfileImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: #fff;
  z-index: 100;
  border-radius: 500px;
  margin-top: -200px;
  margin-bottom: 20px;
  z-index: 200;
`;

const ProfileShadow = styled.input`
  position: absolute;
  width: 250px;
  height: 250px;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
  border-radius: 500px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 500px;
`;

const CameraComponent = styled.img`
  position: absolute;
  cursor: pointer;
`;

const Nickname = styled.div`
  top: 750px;
  font-size: 36px;
  font-weight: 400;
  -webkit-user-select: none;
  margin-bottom: 40px;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  top: 850px;
  width: 784px;
  margin-bottom: 60px;
`;

const ContentLine = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const Label = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-right: 20px;
  width: 110px;
`;

const Content = styled.div`
  font-weight: 300;
  word-wrap: break-word;
  width: 654px;
`;

const ButtonLine = styled.div`
  display: flex;
  width: 784px;
  justify-content: flex-end;
  margin-bottom: 60px;
`;

const RocketWrapper = styled.div`
  position: absolute;
  top: 15vh;
  width: 300px;
  height: 400px;
  z-index: 120;
  animation: spin 7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const RocketComponent = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 20;
`;

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.onHover = this.onHover.bind(this);
    this.onHoverOut = this.onHoverOut.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onHover() {
    this.setState({ hover: true });
  }

  onHoverOut() {
    this.setState({ hover: false });
  }

  onLogout() {
    this.props.fetchLogout.start(); // eslint-disable-line
  }

  render() {
    const { hover } = this.state;
    const {
      followCount,
      followersCount,
      nickname,
      win,
      lose,
      description,
    } = this.props;
    return (
      <AccountPageWrapper>
        <BackgroundComponent src={Background} alt="" />
        <RocketWrapper>
          <RocketComponent src={Rocket} alt="" />
        </RocketWrapper>
        <FollowLine>
          <FollowComponent>
            <FollowBlock>
              <Span style={{ fontSize: '30px' }}>{followCount}</Span>
            </FollowBlock>
            <Span>Подписчики</Span>
          </FollowComponent>
          <FollowComponent>
            <FollowBlock>
              <Span style={{ fontSize: '30px' }}>{followersCount}</Span>
            </FollowBlock>
            <Span>Подписки</Span>
          </FollowComponent>
        </FollowLine>
        <ProfileImageBlock
          onMouseEnter={this.onHover}
          onMouseLeave={this.onHoverOut}
        >
          <ProfileImage src={Image} alt="" />
          {hover ? <ProfileShadow /> : ''}
          {hover ? <CameraComponent src={Camera} alt="" /> : ''}
        </ProfileImageBlock>
        <Nickname>{nickname}</Nickname>
        <ContentBlock>
          <ContentLine>
            <Label>Репутация:</Label>
            <Content>
              {win} Побед / {lose} Поражений
            </Content>
          </ContentLine>
          <ContentLine>
            <Label>О себе:</Label>
            <Content>{description}</Content>
          </ContentLine>
          <ContentLine>
            <Label>История:</Label>
          </ContentLine>
        </ContentBlock>
        <ButtonLine>
          <Button text="Редактировать" w="217px" right="40px" />
          <Button
            text="Выход"
            isTransparent
            isRed
            w="217px"
            onClick={this.onLogout}
          />
        </ButtonLine>
      </AccountPageWrapper>
    );
  }
}

AccountPage.propTypes = {
  followCount: PropTypes.number,
  followersCount: PropTypes.number,
  win: PropTypes.number,
  lose: PropTypes.number,
  nickname: PropTypes.string,
  description: PropTypes.string,
  fetchLogout: PropTypes.func,
};

AccountPage.defaultProps = {
  followCount: 90,
  followersCount: 90,
  win: 150,
  lose: 13,
  nickname: 'Notan Evchiform',
  description:
    'У меня есть мечта,такие называют глобальными, а так оно и есть. Я хочу изменить этот мир в лучшую сторону. Говорят: "Если хочешь изминить мир, начни с себя." Я так и делаю, боюрсь со своими недостатками, ведь они есть у всех. Стремлюсь всегда к лучшему, став лучше, лучше будет тем, кто рядом со мной',
};

export default connect(
  () => ({}),
  dispatch => ({ fetchLogout: fetchLogout.bindTo(dispatch) }),
)(AccountPage);
