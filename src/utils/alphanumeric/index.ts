export const alphanumericFormat = (value: string): string => {
  return value.replace(/[^A-Za-z0-9\s]/gi, '');
};
