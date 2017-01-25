import React from 'react';
import {connect} from 'react-redux';
import Board from './board';
import {receiveCard, resetCards, removeCard} from './actions';

const mapStateToProps = state => ({
  setNumber: state.setNumber,
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  receiveCard: card => dispatch(receiveCard(card)),
  resetCards: () => dispatch(resetCards()),
  removeCard: card => dispatch(removeCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
