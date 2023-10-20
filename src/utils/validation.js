export const isValidString = (str) => {
  return typeof str === "string" && str.trim() !== "";
};

export const isValidNumber = (num) => {
  return !isNaN(Number(num)) && Number(num) > 0;
};
