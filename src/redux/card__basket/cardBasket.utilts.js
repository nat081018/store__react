export const addItemToTheBasket = (cardItems, addCardItem) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === addCardItem.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === addCardItem.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...addCardItem, quantity: 1 }];
};
