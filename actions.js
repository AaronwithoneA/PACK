export const RECEIVE_CARD = "RECEIVE_CARD";
export const RESET_CARDS = "RESET_CARDS";
export const REMOVE_CARD = "REMOVE_CARD";

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const resetCards = () => ({
  type: RESET_CARDS
});

export const removeCard = card => ({
  type: REMOVE_CARD,
  card
});
