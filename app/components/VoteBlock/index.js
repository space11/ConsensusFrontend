import React, { Component } from 'react';
import * as Styles from './styles';

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
      <Styles.VoteBlockWrapper>
      <Styles.UpperLine>
        <Styles.Title>Кто прав?</Styles.Title>
        <Styles.VoteCount>Проголосовали {count} человек</Styles.VoteCount>
        </Styles.UpperLine>
        <Styles.DownLine>
          <Styles.VoteLine>
            <Styles.VoteLineText>
            <Styles.VoteGroup>
              <Styles.Nickname leading={this.state.leadsHost}>
                {host}
              </Styles.Nickname>
              <Styles.Count>
                {hostCount}
              </Styles.Count>
              </Styles.VoteGroup>
              <Styles.Percentage leading={this.state.leadsHost}>
                {hostPercentage}
              </Styles.Percentage>
            </Styles.VoteLineText>
            <div style={{position: 'relative'}}>
            <Styles.Line />
            <Styles.LineFuel width={hostPercentage}/>
            </div>
          </Styles.VoteLine>
          <Styles.VoteLine style={{margin: '0'}}>
            <Styles.VoteLineText>
            <Styles.VoteGroup>
              <Styles.Nickname leading={this.state.leadsOpponent}>
                {opponent}
              </Styles.Nickname>
              <Styles.Count>
                {opponentCount}
              </Styles.Count>
              </Styles.VoteGroup>
              <Styles.Percentage leading={this.state.leadsOpponent}>
                {opponentPercentage}
              </Styles.Percentage>
            </Styles.VoteLineText>
            <div style={{position: 'relative'}}>
            <Styles.Line />
            <Styles.LineFuel width={opponentPercentage}/>
            </div>
          </Styles.VoteLine>
        </Styles.DownLine>
      </Styles.VoteBlockWrapper>
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
