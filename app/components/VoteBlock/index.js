import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Line from './components/voteLine';
import Plus from '../../images/Controls/plus';
import Cross from '../../images/Controls/cross';

const VoteBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 2em;
  color: #4a4a4a;
  margin-top: 0;
  -webkit-user-select: none;
`;

const VotesTotal = styled.div`
  align-self: center;
  font-weight: 300;
  font-size: 0.5em;
  color: #4a4a4a;
  margin-left: 5px;
  -webkit-user-select: none;
`;

const Vote = styled.div`
  display: flex;
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

export default class VoteBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVotedUp: props.isVotedUp || false,
      isVotedDown: props.isVotedDown || false,
    };
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
        <Title>
          Кто прав?
          <VotesTotal>({this.props.votes} голосов)</VotesTotal>
        </Title>
        <Vote>
          <div>
            <VoteLine>
              <Nickname>{this.props.nicknameUp}</Nickname>
              <Percents>
                {this.props.percentsUp}{' '}
                <ButtonWrapper onClick={::this.voteUp}>
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
            <VoteLine>
              <Nickname>{this.props.nicknameDown}</Nickname>
              <Percents>
                {this.props.percentsDown}{' '}
                <ButtonWrapper onClick={::this.voteDown}>
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
  isVotedUp: PropTypes.bool,
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
  percentsUp: '30%',
  percentsDown: '70%',
};
