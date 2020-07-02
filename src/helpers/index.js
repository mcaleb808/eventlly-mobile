// eslint-disable-next-line import/prefer-default-export
export const textShorthand = (text = '', limit = 25) =>
  text && text.length >= limit ? `${text.substring(0, limit - 4)}...` : text;
