export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const REMOVE_CARD = "REMOVE_CARD";

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const removeCard = card => ({
  type: REMOVE_CARD,
  card
});
