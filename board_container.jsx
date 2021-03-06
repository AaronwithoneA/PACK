import React from 'react';
import {connect} from 'react-redux';
import Board from './board';
import {receiveCard, resetCards, removeCard, increasePackCount, clearCount} from './actions';

const mapStateToProps = state => ({
  setNumber: state.setNumber,
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  receiveCard: card => dispatch(receiveCard(card)),
  resetCards: () => dispatch(resetCards()),
  removeCard: card => dispatch(removeCard(card)),
  increasePackCount: () => dispatch(increasePackCount()),
  clearCount: () => dispatch(clearCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
