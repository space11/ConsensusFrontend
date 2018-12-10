import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as signalR from '@aspnet/signalr';
import styled from 'styled-components';
import config from 'utils/config';
import SmileIcon from 'images/chatblock/smile';
import { makeUserSelector } from './selectors';
import Message from './components/message';

/* eslint-disable */

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
  position: relative;
  width: 95%;

  @media screen and (max-width: 1154px) {
    width: 100%;
  }
`;

const LowLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Input = styled.textarea`
  font-size: 22px;
  width: 90%;
  resize: none;
  font-weight: 300;

  &::placeholder {
    color: #474d90;
    font-weight: 300;
  }

  @media screen and (max-width: 1154px) {
    width: 100%;
  }
`;

const Line = styled.div`
  border: none;
  background-color: #474d90;
  height: 1px;
`;

const ButtonWrapper = styled.button`
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: calc(100vh - 21vw);
  min-width: 360px;
  height: 100%;

  @media screen and (max-width: 1154px) {
    position: relative;
    width: 100%;
    min-width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
  color: #4a4a4a;
  -webkit-user-select: none;

  @media screen and (max-width: 1154px) {
    width: 100%;
  }
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  min-width: 320px;
  max-height: 50vh;
  min-height: 320px;

  @media screen and (max-width: 1154px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

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
    .withUrl(config.API_ADDRESS + `/chatHub`, { transport: signalR.HttpTransportType.WebSockets })
    .build();

    const nick = this.state.userName;

    this.setState({ hubConnection, nick }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :('));

        this.state.hubConnection.on('Message', (userId, userName, sentOn, message) => {
          this.state.messages.push({userId, userName, message});

          this.setState({ messages: this.state.messages });
        });
      });
    }

    sendMessage = () => {
      this.state.hubConnection
        .invoke('SendMessage', this.state.userId, this.state.userName, this.state.message, new Date())
        .catch(err => console.error(err));
    
        this.setState({message: ''});      
    };

  render() {
    return (
      <ChatWrapper>
        <Title>Комментарии</Title>
        <MessageBlock collapsed={this.props.collapsed}>  
        {this.state.messages.map((message, index) => (
          <Message key={index} url={message.url} nickname={message.userName} text={message.message} />
        ))}
        </MessageBlock>
        <InputFormWrapper>
          <Line />
          <LowLineWrapper>
            <Input
              placeholder="Сообщение..."
              type="text"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <ButtonWrapper onClick={this.sendMessage}>
              <SmileIcon />
            </ButtonWrapper>
          </LowLineWrapper>
        </InputFormWrapper>
      </ChatWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeUserSelector(),
});

export default connect(mapStateToProps, () => ({}))(Chat);