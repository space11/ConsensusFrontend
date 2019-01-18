import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as signalR from '@aspnet/signalr';
import config from 'utils/config';
import SmileIcon from 'images/chatblock/smile.svg';
import Message from './components/message';
import {
  InputFormWrapper,
  LowLineWrapper,
  Input,
  ButtonWrapper,
  ChatWrapper,
  TitleBlock,
  Title,
  MessageBlock,
  Inner,
} from './styles';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'deviantkun',
      userId: '833b88f5caa6982c9d5d599617ddb25e',
      messages: [{ message: 'Добро пожаловать в чат!' }],
      message: '',
      hubConnection: null,
    };
  }

  renderChat() {
    const { messages } = this.state;
    const element = document.getElementsByClassName('chat');
    element.scrollTop = element.scrollHeight;

    return messages.map((mes, index) => (
      <Message
        key={`my key${index}`}
        url={`/account/${mes.userId}`}
        nickname={mes.userName}
        text={mes.message}
      />
    ));
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
    }

    this.setState({ message: '' });
  };

  handleKeyPress = target => {
    if (target.charCode === 13) {
      this.sendMessage();
    }
  };

  render() {
    const { message } = this.state;
    return (
      <ChatWrapper>
        <TitleBlock>
          <Title>Чат</Title>
        </TitleBlock>
        <MessageBlock>
          <Inner className="chat">{this.renderChat()}</Inner>
        </MessageBlock>
        <InputFormWrapper>
          <LowLineWrapper>
            <Input
              placeholder="Сообщение..."
              type="text"
              value={message}
              onChange={e => this.setState({ message: e.target.value })}
              onKeyPress={this.handleKeyPress}
              autoFocus
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

export default connect(
  () => ({}),
  () => ({}),
)(Chat);
