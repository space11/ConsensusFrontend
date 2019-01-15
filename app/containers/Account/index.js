import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLogout } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Background from 'images/account/background.svg';
import Camera from 'images/account/camera.svg';
import Rocket from 'images/account/rocket.svg';
import Image from './1.jpg';
import {
  AccountPageWrapper,
  BackgroundComponent,
  FollowLine,
  FollowComponent,
  FollowBlock,
  Span,
  ProfileImageBlock,
  ProfileShadow,
  ProfileImage,
  CameraComponent,
  Nickname,
  ContentBlock,
  ContentLine,
  Label,
  Content,
  ButtonLine,
  RocketWrapper,
  RocketComponent,
} from './styles';

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
