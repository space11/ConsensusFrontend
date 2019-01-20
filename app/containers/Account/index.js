import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLogout } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Background from 'images/account/background.svg';
import Camera from 'images/account/camera.svg';
import Rocket from 'images/account/rocket.svg';
import Arrow from 'images/account/arrow.svg';
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
  SendAgain,
  InputField,
  Error,
  EditedContentLine,
  InputTextField,
  ChangePasswordButton,
  ChangePasswordLabel,
  StoryWrapper,
} from './styles';

const renderField = ({ input, type, meta: { touched, error, warning } }) => (
  <div style={{ width: '100%' }}>
    <InputField type={type} {...input} />
    {touched &&
      ((error && <Error>{error}</Error>) ||
        (warning && <Error>{warning}</Error>))}
  </div>
);

const renderTextField = ({ input, meta: { touched, error, warning } }) => (
  <div style={{ width: '100%' }}>
    <textarea {...input} rows="10" cols="40" style={InputTextField} />
    {touched &&
      ((error && <Error>{error}</Error>) ||
        (warning && <Error>{warning}</Error>))}
  </div>
);

/* eslint-disable */

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edited: false,
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
    const { hover, edited } = this.state;
    const {
      followCount,
      followersCount,
      nickname,
      win,
      lose,
      desc,
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
        {edited ? (
          <ContentBlock>
            <EditedContentLine>
              <Label>Имя:</Label>
              <Field name="name" type="text" component={renderField} />
            </EditedContentLine>
            <EditedContentLine>
              <Label>О себе:</Label>
              <Field
                name="description"
                type="text"
                component={renderTextField}
              />
            </EditedContentLine>
            <EditedContentLine>
              <Label>E-mail:</Label>
              <Field name="email" type="text" component={renderField} />
            </EditedContentLine>
            <ContentLine>
              <Label />
              <Content>
                E-mail не подтвержден. На указанный адрес было отправлено письмо
                со ссылкой для подтверждения. Пожалуйста, проверьте Ваш почтовый
                ящик. <SendAgain>Отправить письмо повторно.</SendAgain>
              </Content>
            </ContentLine>
            <ContentLine>
              <ChangePasswordButton>
                Изменить пароль: <img src={Arrow} alt="" />
              </ChangePasswordButton>
            </ContentLine>
            <EditedContentLine>
              <ChangePasswordLabel>Старый пароль:</ChangePasswordLabel>
              <Field name="oldPass" type="password" component={renderField} />
            </EditedContentLine>
            <EditedContentLine>
              <ChangePasswordLabel>Новый пароль:</ChangePasswordLabel>
              <Field name="newPass" type="password" component={renderField} />
            </EditedContentLine>
            <EditedContentLine>
              <ChangePasswordLabel>Потдвердите пароль:</ChangePasswordLabel>
              <Field
                name="confirmPass"
                type="password"
                component={renderField}
              />
            </EditedContentLine>
          </ContentBlock>
        ) : (
          <ContentBlock>
            <ContentLine>
              <Label>Репутация:</Label>
              <Content>
                {win} Побед / {lose} Поражений
              </Content>
            </ContentLine>
            <ContentLine>
              <Label>О себе:</Label>
              <Content>{desc}</Content>
            </ContentLine>
            <ContentLine>
              <Label style={{ cursor: 'pointer' }}>
                История:{' '}
                <img
                  src={Arrow}
                  alt=""
                  style={{ transform: 'rotate(180deg)' }}
                />
              </Label>
              <StoryWrapper>
                <Content>03.01.19 18:00 Победа</Content>
                <Content>03.01.19 18:00 Победа</Content>
                <Content>03.01.19 18:00 Поражение</Content>
              </StoryWrapper>
            </ContentLine>
          </ContentBlock>
        )}
        <ButtonLine>
          <Button
            text={edited ? 'Сохранить' : 'Редактировать'}
            w="217px"
            right="40px"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
              edited
                ? this.setState({ edited: false })
                : this.setState({ edited: true });
            }}
          />
          {edited ? (
            ''
          ) : (
            <Button
              text="Выход"
              isTransparent
              isRed
              w="217px"
              h="54px"
              onClick={this.onLogout}
            />
          )}
        </ButtonLine>
      </AccountPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector('account', states => states.get('form'));
  const name = selector(state, 'name');
  const description = selector(state, 'description');
  const email = selector(state, 'email');
  const oldPass = selector(state, 'oldPass');
  const newPass = selector(state, 'newPass');
  const confirmPass = selector(state, 'confirmPass');
  return { name, description, email, oldPass, newPass, confirmPass };
};

AccountPage.propTypes = {
  followCount: PropTypes.number,
  followersCount: PropTypes.number,
  win: PropTypes.number,
  lose: PropTypes.number,
  nickname: PropTypes.string,
  desc: PropTypes.string,
  fetchLogout: PropTypes.object,
};

AccountPage.defaultProps = {
  followCount: 90,
  followersCount: 90,
  win: 150,
  lose: 13,
  nickname: 'Notan Evchiform',
  desc:
    'У меня есть мечта,такие называют глобальными, а так оно и есть. Я хочу изменить этот мир в лучшую сторону. Говорят: "Если хочешь изминить мир, начни с себя." Я так и делаю, боюрсь со своими недостатками, ведь они есть у всех. Стремлюсь всегда к лучшему, став лучше, лучше будет тем, кто рядом со мной',
};

const Account = reduxForm({
  form: 'account',
  getFormState: state => state.get('form'),
  initialValues: {
    email: '',
    name: '',
    description: '',
  },
})(AccountPage);

export default connect(
  mapStateToProps,
  dispatch => ({ fetchLogout: fetchLogout.bindTo(dispatch) }),
)(Account);
