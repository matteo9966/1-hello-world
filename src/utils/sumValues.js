export const sumValues = (a, b) => {
  if (!a) throw new Error('a is required');
  if (!b) throw new Error('b is required');
  return a + b;
};
