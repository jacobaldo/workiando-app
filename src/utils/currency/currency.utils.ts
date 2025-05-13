import {NUMBER_WITH_COMMAS} from '../../constants/regularExpression';

export const currency = (value: any) => {
  if (value === '' || value === undefined) {
    return 0;
  }

  const newValue = value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return newValue;
};

export const currencyNumber = (value: string) => {
  return Number(value.replace(/[^.0-9]/g, ''));
};

export const currencyTest = (value: string) => {
  let temp = currencyNumber(value);
  return currency(temp).replace('$', '');
};

export const numberWithCommas = (
  value: string | number | null | undefined,
  decimals: boolean = true,
  removeNegative: boolean = false,
) => {
  if (value) {
    const parts = value.toString().split('.');
    const numberPart = removeNegative ? parts[0].replace('-', '') : parts[0];
    const decimalPart = parts[1];

    if (decimals) {
      return (
        addCommaSeparators(numberPart) +
        '.' +
        (decimalPart ? decimalPart.padEnd(2, '0') : '00')
      );
    }

    return addCommaSeparators(numberPart);
  }
  return '0.00';
};

export const addCommaSeparators = (data: string | number) => {
  return data.toString().replace(NUMBER_WITH_COMMAS, ',');
};

export const numberWithCommasWithRD = (
  value: string | number | null | undefined,
  decimals: boolean = true,
  removeNegative: boolean = false,
) => {
  const resp = numberWithCommas(value, decimals, removeNegative);

  return `RD$ ${resp}`;
};
