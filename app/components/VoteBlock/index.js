import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import Button from 'components/Button';
import * as Styles from './styles';
import sendVote from './saga';
import { fetchVote } from './action';

/* eslint-disable */;
class VoteBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leadsHost: false,
      leadsOpponent: false,
      voted: false,
      hostId: props.hostId || localStorage.userId,
      opponentId: props.opponentId || localStorage.userId,
      forHost: false,
      hostPercentage: '',
      opponentPercentage: '',
    };
    this.vote = this.vote.bind(this);
  }

  componentWillMount() {
    const { hostCount, opponentCount } = this.props;

    const sumCount = hostCount + opponentCount;

    this.setState({
      hostPercentage: `${((hostCount / sumCount) * 100).toString()}%`,
    });

    this.setState({
      opponentPercentage: `${(100 - (hostCount / sumCount) * 100).toString()}%`,
    });

    if (hostCount > opponentCount) {
      this.setState({ leadsHost: true });
    } else {
      this.setState({ leadsOpponent: true });
    }
  }

  vote() {
    const { voted, hostId, opponentId, forHost } = this.state;
    if (voted) {
      forHost
        ? this.props.fetchVote.start({ toUser: hostId, debateId: '1234' })
        : this.props.fetchVote.start({ toUser: opponentId, debateId: '1234' });
    }
  }

  unVote() {
    const { voted, hostId, opponentId, forHost } = this.state;
    if (voted) {
      forHost
        ? this.props.fetchVote.start({ toUser: hostId, debateId: '1234' })
        : this.props.fetchVote.start({ toUser: opponentId, debateId: '1234' });
    }
  }

  render() {
    const { count, host, opponent, hostCount, opponentCount } = this.props;
    const {
      leadsHost,
      leadsOpponent,
      hostPercentage,
      opponentPercentage,
      voted,
      forHost,
    } = this.state;
    return (
      <Styles.VoteBlockWrapper>
        <Styles.UpperLine>
          <Styles.Title>Кто прав?</Styles.Title>
          <Styles.VoteCount>Проголосовали {count} человек</Styles.VoteCount>
        </Styles.UpperLine>
        <Styles.DownLine>
          <Styles.VoteLine>
            <Styles.VoteLineText>
              <Styles.VoteGroup onClick={() => this.setState({voted: true, forHost: true})}>
                <Styles.Nickname leading={leadsHost}>{host}</Styles.Nickname>
                <Styles.Count>{hostCount}</Styles.Count>
              </Styles.VoteGroup>
              <Styles.Percentage leading={leadsHost}>
                {hostPercentage}
              </Styles.Percentage>
            </Styles.VoteLineText>
            <div style={{ position: 'relative' }}>
              <Styles.Line style={{ boxShadow: voted & forHost ? '0px 4px 6px rgba(255, 255, 255, 0.16)' : ''}}/>
              <Styles.LineFuel width={hostPercentage} />
            </div>
          </Styles.VoteLine>
          <Styles.VoteLine style={{ margin: '0' }}>
            <Styles.VoteLineText>
              <Styles.VoteGroup onClick={() => this.setState({voted: true, forHost: false})}>
                <Styles.Nickname leading={leadsOpponent}>
                  {opponent}
                </Styles.Nickname>
                <Styles.Count>{opponentCount}</Styles.Count>
              </Styles.VoteGroup>
              <Styles.Percentage leading={leadsOpponent}>
                {opponentPercentage}
              </Styles.Percentage>
            </Styles.VoteLineText>
            <div style={{ position: 'relative' }}>
              <Styles.Line style={{ boxShadow: voted & !forHost ? '0px 4px 6px rgba(255, 255, 255, 0.16)' : ''}}/>
              <Styles.LineFuel width={opponentPercentage} />
            </div>
          </Styles.VoteLine>
        </Styles.DownLine>
        <Styles.VoteButtonWrapper>
          <Button
            type="button"
            text="Проголосовать"
            w="139px"
            h="36px"
            fontSize="13px"
            onClick={this.vote}
            isValid={!voted}
          />
        </Styles.VoteButtonWrapper>
      </Styles.VoteBlockWrapper>
    );
  }
}

VoteBlock.defaultProps = {
  count: 900,
  host: 'Pynya',
  opponent: 'Sysyan',
  hostCount: 550,
  opponentCount: 550,
};

VoteBlock.propTypes = {
  count: PropTypes.number,
  host: PropTypes.string,
  opponent: PropTypes.string,
  hostId: PropTypes.string,
  opponentId: PropTypes.string,
  hostCount: PropTypes.number,
  opponentCount: PropTypes.number,
  fetchVote: PropTypes.any,
};

const withSaga = sendVote.map(saga => injectSaga({ key: saga.name, saga }));

const Vote = compose(withSaga[0])(VoteBlock);

export default connect(
  () => ({}),
  dispatch => ({ fetchVote: fetchVote.bindTo(dispatch) }),
)(Vote);
