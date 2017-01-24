import React from 'react';
import {connect} from 'react-redux';
import Board from './board';
import {receiveCard, removeCard} from './actions';

const mapStateToProps = state => ({
  setNumber: state.setNumber
});

const mapDispatchToProps = dispatch => ({
  receiveCard: receiveCard,
  removeCard: removeCard
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
