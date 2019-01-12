import React, { Component } from 'react';
import styled from 'styled-components';

const VoteBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #303565;
  border-radius: 5px;
  width: 388px;
  height: 194px;
  margin-top: 30px;
  padding: 20px;
`;

const UpperLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.211704px;
  color: #ffffff;
  -webkit-user-select: none;
`;

const VoteCount = styled.div`
  font-size: 13px;
  letter-spacing: 0.127023px;
  color: #9b9b9b;
  -webkit-user-select: none;
`;

const DownLine = styled.div`
  display: flex;
  flex-direction: column;
`;

const VoteLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const VoteLineText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

const VoteGroup = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Count = styled.div`
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.0987954px;
  color: #9b9b9b;
  -webkit-user-select: none;
`;

const Nickname = styled.div`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.141136px;
  color: #ffffff;
  margin-right: 10px;
  -webkit-user-select: none;
  color: ${props => (props.leading ? '#F7567C' : '#fff')};
`;

const Percentage = styled.div`
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.127023px;
  color: #9b9b9b;
  -webkit-user-select: none;
  color: ${props => (props.leading ? '#F7567C' : '#fff')};
`;

const Line = styled.div`
  width: 100%;
  height: 15px;
  background: #ffffff;
  border-radius: 5px;
`;

const LineFuel = styled.div`
  position: absolute;
  height: 15px;
  top: 0;
  background: #f7567c;
  border-radius: 5px;
  width: ${props => props.width};
`;

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
