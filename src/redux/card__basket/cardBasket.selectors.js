import { createSelector } from "reselect";

const selectorCard = (state) => state.cardBasket;

export const selectCardItems = createSelector(
  [selectorCard],
  (card) => card.cardItems
);

export const selectCardHidden = createSelector(
  [selectorCard],
  (card) => card.hidden
);

export const selectCardCount = createSelector([selectCardItems], (cardItems) =>
  cardItems.reduce(
    (accumQuantity, cardItem) => accumQuantity + cardItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCardItems], (cardItems) =>
  cardItems.reduce(
    (accumQuantity, cardItem) =>
      accumQuantity + cardItem.quantity + cardItem.price,
    0
  )
);
