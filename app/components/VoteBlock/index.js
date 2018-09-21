import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Line from './components/voteLine';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const VoteBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const Title = styled.h1`
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 2em;
  color: #4a4a4a;
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

export default class VoteBlock extends PureComponent {
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
              <Percents>{this.props.percentsUp}</Percents>
            </VoteLine>
            <Line length={this.props.percentsUp} />
          </div>
          <div>
            <VoteLine>
              <Nickname>{this.props.nicknameDown}</Nickname>
              <Percents>{this.props.percentsDown}</Percents>
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
