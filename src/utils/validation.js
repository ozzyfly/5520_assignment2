export const isValidString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

export const isValidNumber = (num) => {
  return !isNaN(num) && Number(num) > 0;
};

export const isOverbudget = (quantity, price, limit = 500) => {
  return quantity * price > limit;
};
