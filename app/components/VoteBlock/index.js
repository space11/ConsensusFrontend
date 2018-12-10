import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Plus from 'images/voteblock/plus';
import Cross from 'images/voteblock/cross';
import Collapse from 'images/voteblock/collapse';
import Line from './components/voteLine';

const VoteBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h1`
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 2em;
  color: #4a4a4a;
  margin-top: 0;
  margin-bottom: ${props => (props.collapsed ? '0' : '')};
  -webkit-user-select: none;
  justify-content: space-between;
`;

const VotesTotal = styled.div`
  align-self: center;
  font-weight: 300;
  font-size: 0.5em;
  color: #4a4a4a;
  -webkit-user-select: none;
`;

const Vote = styled.div`
  display: ${props => (props.collapsed ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
`;

const VoteLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Nickname = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Percents = styled.div`
  font-size: 1.5em;
`;

const ButtonWrapper = styled.button`
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

/* eslint-disable */

export default class VoteBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVotedUp: props.isVotedUp || false,
      isVotedDown: props.isVotedDown || false,
      leader: props.leader || 'Sisyan',
    };

    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  voteUp() {
    this.setState({ isVotedUp: true });
  }

  voteDown() {
    this.setState({ isVotedDown: true });
  }

  render() {
    return (
      <VoteBlockWrapper>
        <Title collapsed={this.props.collapsed}>
          <div>
            Кто прав?
            <VotesTotal>
              ({this.props.votes} голосов, лидирует {this.state.leader})
            </VotesTotal>
          </div>
          <ButtonWrapper onClick={this.props.collapse}>
            <Collapse />
          </ButtonWrapper>
        </Title>
        <Vote collapsed={this.props.collapsed}>
          <div>
            <VoteLine>
              <Nickname>{this.props.nicknameUp}</Nickname>
              <Percents>
                {this.props.percentsUp}{' '}
                <ButtonWrapper onClick={this.voteUp}>
                  {this.state.isVotedDown ? (
                    ''
                  ) : this.state.isVotedUp ? (
                    <Cross />
                  ) : (
                    <Plus />
                  )}
                </ButtonWrapper>
              </Percents>
            </VoteLine>
            <Line length={this.props.percentsUp} />
          </div>
          <div>
            <VoteLine style={{marginTop: '0.5rem'}}>
              <Nickname>{this.props.nicknameDown}</Nickname>
              <Percents>
                {this.props.percentsDown}{' '}
                <ButtonWrapper onClick={this.voteDown}>
                  {this.state.isVotedUp ? (
                    ''
                  ) : this.state.isVotedDown ? (
                    <Cross />
                  ) : (
                    <Plus />
                  )}
                </ButtonWrapper>
              </Percents>
            </VoteLine>
            <Line length={this.props.percentsDown} />
          </div>
        </Vote>
      </VoteBlockWrapper>
    );
  }
}

VoteBlock.propTypes = {
  votes: PropTypes.number,
  leader: PropTypes.string,
  isVotedUp: PropTypes.bool,
  collapsed: PropTypes.bool,
  isVotedDown: PropTypes.bool,
  nicknameUp: PropTypes.string,
  nicknameDown: PropTypes.string,
  percentsUp: PropTypes.string,
  percentsDown: PropTypes.string,
};

VoteBlock.defaultProps = {
  votes: 900,
  nicknameUp: 'Pynya',
  nicknameDown: 'Sisyan',
  leader: 'Sisyan',
  percentsUp: '30%',
  percentsDown: '70%',
};
