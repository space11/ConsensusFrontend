import React, { Component } from 'react';
import {
  VoteBlockWrapper,
  UpperLine,
  Title,
  VoteCount,
  DownLine,
  VoteLine,
  VoteLineText,
  VoteGroup,
  Count,
  Nickname,
  Percentage,
  Line,
  LineFuel,
} from './styles';

/* eslint-disable */
class VoteBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      leadsHost: false,
      leadsOpponent: false,
    }
  }

  componentWillUnMount() {
    if(this.props.hostCount > this.props.opponentCount) {
      this.setState({leadsHost: true});
    } else {
      this.setState({leadsOpponent: false});
    }
  }

  render() {
    const { count, host, opponent, hostCount, opponentCount, hostPercentage, opponentPercentage } = this.props;
    return (
      <VoteBlockWrapper>
      <UpperLine>
        <Title>Кто прав?</Title>
        <VoteCount>Проголосовали {count} человек</VoteCount>
        </UpperLine>
        <DownLine>
          <VoteLine>
            <VoteLineText>
            <VoteGroup>
              <Nickname leading={this.state.leadsHost}>
                {host}
              </Nickname>
              <Count>
                {hostCount}
              </Count>
              </VoteGroup>
              <Percentage leading={this.state.leadsHost}>
                {hostPercentage}
              </Percentage>
            </VoteLineText>
            <div style={{position: 'relative'}}>
            <Line />
            <LineFuel width={hostPercentage}/>
            </div>
          </VoteLine>
          <VoteLine style={{margin: '0'}}>
            <VoteLineText>
            <VoteGroup>
              <Nickname leading={this.state.leadsOpponent}>
                {opponent}
              </Nickname>
              <Count>
                {opponentCount}
              </Count>
              </VoteGroup>
              <Percentage leading={this.state.leadsOpponent}>
                {opponentPercentage}
              </Percentage>
            </VoteLineText>
            <div style={{position: 'relative'}}>
            <Line />
            <LineFuel width={opponentPercentage}/>
            </div>
          </VoteLine>
        </DownLine>
      </VoteBlockWrapper>
    );
  }
}

VoteBlock.defaultProps = {
  count: 900,
  host: 'Pynya',
  opponent: 'Sysyan',
  hostCount: 350,
  opponentCount: 550,
  hostPercentage: '40%',
  opponentPercentage: '60%',
}

export default VoteBlock;
