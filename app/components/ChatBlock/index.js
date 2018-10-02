import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from './components/message';
import SmileIcon from '../../images/Controls/smile';

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;

  padding-bottom: 1rem;

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
  width: 31vw;
  min-width: 360px;

  @media screen and (max-width: 1154px) {
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
  height: ${props => (props.collapsed ? '610px' : '470px')};

  @media screen and (max-width: 1154px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      messsages: props.messages,
      message: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ messages: this.props.messages });
  }

  handleChange(event) {
    const valueInput = event.target.value;

    this.setState({
      message: {
        url: 'user1444',
        date: new Date(12, 12, 5),
        nickname: 'OrositelGryadki',
        text: [valueInput],
      },
    });

    this.setState({ value: valueInput });
  }

  handleSubmit() {
    if (this.state.value !== '') {
      if (
        this.state.messages[this.state.messages.length - 1].nickname ===
        this.state.message.nickname
      ) {
        this.state.messages[this.state.messages.length - 1].text.push(
          this.state.value,
        );
        this.setState({ messages: this.state.messages });
      } else {
        this.state.messages.push(this.state.message);
        this.setState({ messages: this.state.messages });
      }

      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <ChatWrapper>
        <Title>Комментарии</Title>
        <MessageBlock collapsed={this.props.collapsed}>
          <div>
            {this.state.messages.map((item, index) => (
              <Message key={`key${index}`} texts={item} />
            ))}
          </div>
        </MessageBlock>
        <InputFormWrapper>
          <Line />
          <LowLineWrapper>
            <Input
              cols="22"
              rows="1"
              placeholder="Сообщение..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <ButtonWrapper onClick={this.handleSubmit}>
              <SmileIcon />
            </ButtonWrapper>
          </LowLineWrapper>
        </InputFormWrapper>
      </ChatWrapper>
    );
  }
}

Chat.propTypes = {
  messsages: PropTypes.array,
};

Chat.defaultProps = {
  messages: [
    {
      url: 'user1',
      nickname: 'Ne yee',
      date: new Date(12, 12, 5),
      text: ['Чатик у меня нормальный был?'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: [
        'я просто случайно по рассылке попалала на их сайт и он оказался подходящим',
      ],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      date: new Date(12, 12, 5),
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      date: new Date(12, 12, 5),
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      date: new Date(12, 12, 5),
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      date: new Date(12, 12, 5),
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      date: new Date(12, 12, 5),
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      date: new Date(12, 12, 5),
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
  ],
};
