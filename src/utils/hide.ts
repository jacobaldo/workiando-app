export function hideEmail(email: string | undefined) {
  if (email) {
    const [username, domain] = email.split('@');
    const hidden = username[0] + username.slice(1).replace(/./g, '*');
    return `${hidden}@${domain}`;
  }
  return '';
}

export function hidePhoneNumber(phone: string | undefined) {
  if (phone) {
    return (
      // phone.slice(0, 2) +
      phone.slice(0, -2).replace(/./g, '*') + phone.slice(-3)
    );
  }
  return '';
}

export function hideAddress(inputString: string | undefined) {
  if (inputString) {
    const commaIndex = inputString.indexOf(',');
    // Si no se encuentra una coma, devuelve el string original
    if (commaIndex === -1) {
      return inputString;
    }
    // Retorna el texto desde la primera coma en adelante
    return inputString.substring(commaIndex + 1).trim();
  }
  return '';
}
