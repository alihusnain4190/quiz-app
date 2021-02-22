export const randomSelection = (arr) => {
  const res = arr.sort(() => Math.random() - 0.5);
  return res;
};
