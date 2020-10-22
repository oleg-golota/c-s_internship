exports.POPULARITY = 'POP';
exports.RATING = 'RATING';
exports.PRICE = 'PRICE';

exports.parseSortOption = (op) => {
  if (op.toUpperCase() === exports.POPULARITY) {
    return exports.POPULARITY;
  }
  if (op.toUpperCase() === exports.RATING) {
    return exports.RATING;
  }
  if (op.toUpperCase() === exports.PRICE) {
    return exports.PRICE;
  }
  return null;
};
