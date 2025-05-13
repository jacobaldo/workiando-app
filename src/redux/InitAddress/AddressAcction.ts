import {START_ADDRESS} from './AddressType';
export const SaveInitAddress = (json: any) => {
  return {
    type: START_ADDRESS,
    payload: json,
  };
};
