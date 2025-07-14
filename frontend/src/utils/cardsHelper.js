export function groupCardsByStatus(cards) {
  return cards.reduce((hash, card) => {
    if (!card.status) return hash; // skip cards with null/empty status

    if (!hash[card.status]) {
      hash[card.status] = [];
    }

    hash[card.status].push(card);
    return hash;
  }, {});
}
