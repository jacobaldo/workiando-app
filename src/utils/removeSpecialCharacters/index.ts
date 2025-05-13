export const removeSpecialCharacters = (values: string) => {
  return values.replace(/[^\wÀ-ÿ\u00f1\u00d1\s]/g, '');
};
