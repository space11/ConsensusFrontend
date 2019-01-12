import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindAll } from 'redux-act';

import makeSelectAuthProvider, { isLogged } from './selectors';
import * as actions from './actions';

export class AuthProvider extends React.PureComponent {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <div>
        {React.Children.map(children, child =>
          React.cloneElement(child, otherProps),
        )}
      </div>
    );
  }
}

AuthProvider.propTypes = {
  children: PropTypes.node,
  stateSelector: PropTypes.any,
};

AuthProvider.defaultProps = {
  stateSelector: state => state.get('authProvider').get('user'),
};

const mapStateToProps = createStructuredSelector({
  authProviderState: makeSelectAuthProvider(),
  isLogged: isLogged(),
});

function mapDispatchToProps(dispatch) {
  return bindAll(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthProvider);
