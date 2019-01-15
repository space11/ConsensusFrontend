import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as signalR from '@aspnet/signalr';
import config from 'utils/config';
import SmileIcon from 'images/chatblock/smile.svg';
import Message from './components/message';
import { fetchMessage } from './actions';
import {
  InputFormWrapper,
  LowLineWrapper,
  Input,
  ButtonWrapper,
  ChatWrapper,
  TitleBlock,
  Title,
  MessageBlock,
} from './styles';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'deviantkun',
      userId: '833b88f5caa6982c9d5d599617ddb25e',
      messages: [],
      message: '',
      hubConnection: null,
    };
  }

  componentDidMount() {
    const hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${config.API_ADDRESS}/chatHub`, {
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    const nick = this.state.userName;

    this.setState({ hubConnection, nick }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :('));

      this.state.hubConnection.on(
        'Message',
        (userId, userName, sentOn, message) => {
          this.state.messages.push({ userId, userName, message });

          this.setState({ messages: this.state.messages });
        },
      );
    });
  }

  sendMessage = () => {
    if (this.state.message !== '') {
      this.state.hubConnection
        .invoke(
          'SendMessage',
          this.state.userId,
          this.state.userName,
          this.state.message,
          new Date(),
        )
        .catch(err => console.error(err));

      // this.props.fetchMessage.start({text: this.state.message});

      this.setState({ message: '' });
    }
  };

  render() {
    const { messages } = this.state;
    const { collapsed } = this.props;
    return (
      <ChatWrapper>
        <TitleBlock>
          <Title>Чат</Title>
        </TitleBlock>
        <MessageBlock collapsed={collapsed} reversed>
          {messages.map((message, index) => (
            <Message
              key={`my key${index}`}
              url={`/account/${message.userId}`}
              nickname={message.userName}
              text={message.message}
            />
          ))}
        </MessageBlock>
        <InputFormWrapper>
          <LowLineWrapper>
            <Input
              placeholder="Сообщение..."
              type="text"
              value={messages}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <ButtonWrapper onClick={this.sendMessage}>
              <img src={SmileIcon} alt="" />
            </ButtonWrapper>
          </LowLineWrapper>
        </InputFormWrapper>
      </ChatWrapper>
    );
  }
}

Chat.propTypes = {
  collapsed: PropTypes.bool,
};

export default connect(
  () => ({}),
  dispatch => ({ fetchMessage: fetchMessage.bindTo(dispatch) }),
)(Chat);
