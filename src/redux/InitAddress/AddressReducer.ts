import {START_ADDRESS} from './AddressType';

const INIT_STATE = {
  initAddressDelivery: {
    home: '',
    postal_code: '',
    street: 'Cargando...',
    region: '',
    city: '',
    country: '',
    country_code: '',
    formatted_address: '',
  },
  initAddress: {
    city: 'Jesús María',
    country: 'Perú',
    country_code: 'PE',
    current: false,
    formatted_address: 'Avenida Brasil, Jesús María, Provincia de Lima, Perú',
    home: '',
    latitude: -12.0754196,
    longitude: -77.0539111,
    postal_code: '',
    radio: 30,
    reference: '',
    region: 'Provincia de Lima',
    street: 'Avenida Brasil',
  },
  radio: 30,
};

const addressReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case START_ADDRESS:
      return {...state, initAddress: action.payload};

    default:
      return {...state};
  }
};

export default addressReducer;
