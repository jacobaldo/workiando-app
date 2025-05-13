export const QUIT_HYPHEN = /-/g;
export const MIN_ONE_SPECIAL_CHAR = /(?=.*[!@#$%^&*])/;
export const MIN_ONE_NUMBER = /(?=.*[0-9])/;
export const MIN_ONE_UPPER_LOWER_CASE_CHAR = /(?=.*[A-Z])(?=.*[a-z])/;
export const ONLY_NUMBERS = /^[0-9]+$/;
export const isKYC = /^KYC$/;
export const REMOVE_ACCENTS = /[\u0300-\u036f]/g;
export const REMOVE_NON_DIGITS = /\D/g;
export const EMAIL_VALIDATION =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const NO_SPECIAL_CHAR = /^[^!-\/:-@\[-`{-~]+$/;
export const ALLOW_ONLY_NUMBERS = /[^0-9]/gi;
export const ALLOW_ONLY_ALPHANUMERIC = /[^a-z0-9ÑÁÉÍÓÚ ]/gi;
export const QUIT_NUMBER_SIGN = /#/g;
export const NUMBER_WITH_COMMAS = /\B(?=(\d{3})+(?!\d))/g;
export const COUNTRY_CODE_VALIDATION_DR = /^(8|80|82|84|809|829|849)$/;
export const DECIMAL_NUMBER = /^\d+(\.\d{1,2})?$/; // Expresión regular para validar un número con hasta dos decimales
export const REMOVE_NON_DIGITS_AND_DOTS = /[^\d.]/g; // Expresión regular para eliminar todo excepto números y puntos
export const AVOID_NUMBER_SPECIAL_CHAR = /^'?\p{L}+(?:[' ]\p{L}+)*'?$/u; // Expresión regular para evitar números y caractares espciales
export const MULTI_DOMAIN_EMAIL_VALIDATION =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{1,}(\.\w{1,})?$/;
