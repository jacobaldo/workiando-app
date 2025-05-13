import {addCommaSeparators} from './currency.utils';

export const maskCurrentValue = (input: string) => {
  if (input === '.' || input === '0') {
    return '';
  }

  let filtered = input.replace(/[^0-9.]/g, '');
  let split = filtered.split('.');

  if (split.length > 1) {
    filtered =
      split[0] + '.' + (split[1].length > 0 ? split[1].slice(0, 2) : '');
  }

  return addCommaSeparators(filtered);
};
