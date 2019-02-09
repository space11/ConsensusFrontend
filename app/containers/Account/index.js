import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { fetchLogout } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Background from 'images/account/background.svg';
import Camera from 'images/account/camera.svg';
import Rocket from 'images/account/rocket.svg';
import Arrow from 'images/account/arrow.svg';
import Cross from 'images/account/cross.svg';
import PlayerBlock from './PlayerBlock';
import Image from './1.jpg';
import * as Styles from './styles';
const renderField = ({ input, type, meta: { touched, error, warning } }) => (
  <div style={{ width: '100%' }}>
    <Styles.InputField type={type} {...input} />
    {touched &&
      ((error && <Styles.Error>{error}</Styles.Error>) ||
        (warning && <Styles.Error>{warning}</Styles.Error>))}
  </div>
);

const renderTextField = ({ input, meta: { touched, error, warning } }) => (
  <div style={{ width: '100%' }}>
    <textarea {...input} rows="10" cols="40" style={Styles.InputTextField} />
    {touched &&
      ((error && <Styles.Error>{error}</Styles.Error>) ||
        (warning && <Styles.Error>{warning}</Styles.Error>))}
  </div>
);

/* eslint-disable */

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edited: false,
      hover: false,
      testShown: false,
      shownStory: false,
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

  onDrop = (file) => {
    // actions
  };


  render() {
    const { hover, edited, testShown, shownStory } = this.state;
    const {
      followCount,
      followersCount,
      nickname,
      win,
      lose,
      desc,
    } = this.props;
    const token = localStorage.userId;
    const id = this.props.match.params.id;
    return (
      <Styles.AccountPageWrapper>
        <Styles.BackgroundComponent src={Background} alt="" />
        <Styles.RocketWrapper>
          <Styles.RocketComponent src={Rocket} alt="" />
        </Styles.RocketWrapper>
        { token === id ? 
        <Dropzone onDrop={this.onDrop}> 
        {({getRootProps, getInputProps, isDragActive}) => {
        return (
        <Styles.ProfileImageBlock
          {...getRootProps()}
          className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onHoverOut}
          style={{  outline: 'none'}}
        >
        {hover ? <Styles.CameraComponent src={Camera} alt="" /> : '' }
<Styles.ProfileShadow style={{opacity: hover ? '0.6': '0', transition: '0.3s'}}>
<input {...getInputProps()} />
</Styles.ProfileShadow>
          <Styles.ProfileImage src={Image} alt="" />
          </Styles.ProfileImageBlock>
        )
        }}
      </Dropzone>
        : 
        <Styles.ProfileImageBlock
        >
        <Styles.ProfileImage src={Image} alt="" />
        </Styles.ProfileImageBlock>
        }
        <Styles.Nickname>{nickname}</Styles.Nickname>
        <Styles.TestLink onClick={() => { testShown ? this.setState({testShown: false}) : this.setState({testShown: true })}}>Тестирование веб-камеры и звука</Styles.TestLink>
        {testShown ? (
          <Styles.Test>
          <Styles.TestShadowWrapper onClick={() => {this.setState({testShown: false})}}/>
            <Styles.TestWrapper>
              <Styles.TestTitle><span>Тестирование веб-камеры и звука</span>
              <Styles.CrossWrapper onClick={() => {this.setState({testShown: false})}}><img src={Cross} alt=""/></Styles.CrossWrapper></Styles.TestTitle>
              <Styles.TestContentWrapper>
                  <Styles.Microphone>Микрофон</Styles.Microphone>
                  <Styles.LevelNumberWrapper>
                    <Styles.LevelNumber>1</Styles.LevelNumber>
                    <Styles.LevelNumber>2</Styles.LevelNumber>
                    <Styles.LevelNumber>3</Styles.LevelNumber>
                    <Styles.LevelNumber>4</Styles.LevelNumber>
                    <Styles.LevelNumber>5</Styles.LevelNumber>
                    <Styles.LevelNumber>6</Styles.LevelNumber>
                    <Styles.LevelNumber>7</Styles.LevelNumber>
                    <Styles.LevelNumber>8</Styles.LevelNumber>
                    <Styles.LevelNumber>9</Styles.LevelNumber>
                    <Styles.LevelNumber>10</Styles.LevelNumber>
                  </Styles.LevelNumberWrapper>
                  <div style={{position: 'relative'}}>
                  <Styles.LevelLineColored width="100%"/>
                  <Styles.LevelLine />
                  </div>
                  <Styles.CameraTitle>Камера</Styles.CameraTitle>
                  <PlayerBlock width="408" height="204" autoplay="autoplay"/>
              </Styles.TestContentWrapper>
            </Styles.TestWrapper>
          </Styles.Test>
        ) : 
        ''}
        {edited ? (
          <Styles.ContentBlock>
            <Styles.EditedContentLine>
              <Styles.Label>Имя:</Styles.Label>
              <Field name="name" type="text" component={renderField} />
            </Styles.EditedContentLine>
            <Styles.EditedContentLine>
              <Styles.Label>О себе:</Styles.Label>
              <Field
                name="description"
                type="text"
                component={renderTextField}
              />
            </Styles.EditedContentLine>
            <Styles.EditedContentLine>
              <Styles.Label>E-mail:</Styles.Label>
              <Field name="email" type="text" component={renderField} />
            </Styles.EditedContentLine>
            <Styles.ContentLine>
              <Styles.Label />
              <Styles.Content style={{ marginTop: '10px' }}>
                E-mail не подтвержден. На указанный адрес было отправлено письмо
                со ссылкой для подтверждения. Пожалуйста, проверьте Ваш почтовый
                ящик. <Styles.SendAgain>Отправить письмо повторно.</Styles.SendAgain>
              </Styles.Content>
            </Styles.ContentLine>
            <Styles.ContentLine>
              <Styles.ChangePasswordButton>
                Изменить пароль: <img src={Arrow} alt="" />
              </Styles.ChangePasswordButton>
            </Styles.ContentLine>
            <Styles.EditedContentLine>
              <Styles.ChangePasswordLabel>Старый пароль:</Styles.ChangePasswordLabel>
              <Field name="oldPass" type="password" component={renderField} />
            </Styles.EditedContentLine>
            <Styles.EditedContentLine>
              <Styles.ChangePasswordLabel>Новый пароль:</Styles.ChangePasswordLabel>
              <Field name="newPass" type="password" component={renderField} />
            </Styles.EditedContentLine>
            <Styles.EditedContentLine>
              <Styles.ChangePasswordLabel>Потдвердите пароль:</Styles.ChangePasswordLabel>
              <Field
                name="confirmPass"
                type="password"
                component={renderField}
              />
            </Styles.EditedContentLine>
          </Styles.ContentBlock>
        ) : (
          <Styles.ContentBlock>
            <Styles.ContentLine>
              <Styles.Label>Репутация:</Styles.Label>
              <Styles.Content>
                {win} Побед / {lose} Поражений
              </Styles.Content>
            </Styles.ContentLine>
            <Styles.ContentLine>
              <Styles.Label>О себе:</Styles.Label>
              <Styles.Content>{desc}</Styles.Content>
            </Styles.ContentLine>
            <Styles.ContentLine>
              <Styles.Label style={{ cursor: 'pointer' }} onClick={() => {shownStory ? this.setState({shownStory: false}) : this.setState({shownStory: true})}}>
                История:{' '}
                <Styles.ArrowComponent
                  src={Arrow}
                  shownStory={shownStory}
                  alt=""
                />
              </Styles.Label>
              { shownStory ? 
              <Styles.StoryWrapper shownStory={shownStory}>
                <Styles.Content style={{ marginBottom: '10px' }}>03.01.19 18:00 Победа</Styles.Content>
                <Styles.Content style={{ marginBottom: '10px' }}>03.01.19 18:00 Победа</Styles.Content>
                <Styles.Content style={{ marginBottom: '10px' }}>03.01.19 18:00 Поражение</Styles.Content>
              </Styles.StoryWrapper> : ''}
            </Styles.ContentLine>
          </Styles.ContentBlock>
        )}
        { token === id ? <Styles.ButtonLine>
          <Button
            text={edited ? 'Сохранить' : 'Редактировать'}
            w="217px"
            right={edited ? '0px' : '40px'}
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
        </Styles.ButtonLine> : <Styles.ButtonLine>
          <Button
            text="Пригласить на дебаты"
            w="268px"
            right="40px"
            onClick={() => ({})}
          />
        </Styles.ButtonLine> 
        }
      </Styles.AccountPageWrapper>
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
