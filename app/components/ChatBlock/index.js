import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as signalR from '@aspnet/signalr';
import styled from 'styled-components';
import config from 'utils/config';
import SmileIcon from 'images/chatblock/smile.svg';
import Message from './components/message';
import { fetchMessage } from './actions';

/* eslint-disable */

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
  position: relative;
  width: 100%;
  padding: 10px 20px ;
  height: 47px;
  border: solid #DADADA;
  border-width: 1px 0 0 0;
  margin-top: 19px;
`;

const LowLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  letter-spacing: 0.602182px;
  height: 19px;

  &::placeholder {
    color: #7D81B0;
    font-weight: 300;
  }
`;

const ButtonWrapper = styled.button`
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 992px;
  background: #F9F9F9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 5px; 
`;

const TitleBlock = styled.div`
  display: flex;
  background: #F9F9F9;
  border: solid #DADADA;
  border-width: 0 0 1px 0;
  width: 100%;
  height: 47px;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
`;

const Title = styled.h1`
  -webkit-user-select: none;
  font-size: 25px;
  letter-spacing: 0.338727px;
  color: #000000;
  font-weight: normal;
  line-height: normal;
`;

const MessageBlock = styled.ol`
  height: 514px;
  padding: 0 20px;
  list-style: none;
  overflow-y: scroll;
  word-wrap: break-word;
  overflow-x: hidden;
  min-width: 100%;
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
      if(this.state.message !== ''){
      this.state.hubConnection
        .invoke('SendMessage', this.state.userId, this.state.userName, this.state.message, new Date())
        .catch(err => console.error(err));

        // this.props.fetchMessage.start({text: this.state.message});
    
        this.setState({message: ''});      
      }
    };

  render() {
    return (
      <ChatWrapper>
      <TitleBlock>
        <Title>Чат</Title>
        </TitleBlock>
        <MessageBlock collapsed={this.props.collapsed} reversed>  
        {this.state.messages.map((message, index) => (
          <Message key={index} url={message.url} nickname={message.userName} text={message.message} />
        ))}
        </MessageBlock>
        <InputFormWrapper>
          <LowLineWrapper>
            <Input
              placeholder="Сообщение..."
              type="text"
              value={this.state.message}
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

export default connect(() => ({}), dispatch => ({ fetchMessage: fetchMessage.bindTo(dispatch) }),)(Chat);