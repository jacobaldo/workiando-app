export const analizingDirections = (result: any) => {
  //init
  let ShouldBeComponent: any = {
    home: ['street_number'],
    street: ['street_address', 'route'],
    //urbanization:["sublocality_level_1","sublocality"],
    //district:["locality"],
    city: [
      'locality',
      'sublocality',
      'sublocality_level_1',
      'sublocality_level_2',
      'sublocality_level_3',
      'sublocality_level_4',
    ],
    region: [
      'administrative_area_level_1',
      'administrative_area_level_2',
      'administrative_area_level_3',
      'administrative_area_level_4',
      'administrative_area_level_5',
    ],
    country: ['country'],
    country_code: ['country'],
    postal_code: ['postal_code'],
  };

  let address: any = {
    home: '',
    street: '',
    city: '',
    region: '',
    country: '',
    country_code: '',
    postal_code: '',
  };

  result?.address_components.forEach((component: any) => {
    for (let shouldBe in ShouldBeComponent) {
      if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
        if (shouldBe === 'country_code') {
          address[shouldBe] = component.short_name;
        } else {
          address[shouldBe] = component.long_name;
        }
      }
    }
  });

  const {street, home, city, region, country, postal_code} = address;
  let formatted_address = '';
  if (street) {
    const arrayAddress = [
      street + (home ? ' ' + home : ''),
      city,
      region,
      country,
    ].filter(e => e !== '');
    formatted_address = arrayAddress.join(', ');
  } else {
    let addressAux = result.formatted_address.replace(' ' + postal_code, '');
    if (
      city &&
      region &&
      addressAux.search(city) !== -1 &&
      addressAux.search(region) === -1
    ) {
      formatted_address =
        addressAux.split(city)[0] +
        city +
        ', ' +
        region +
        addressAux.split(city)[1];
      formatted_address = formatted_address;
    } else {
      formatted_address = addressAux;
    }
  }

  if (formatted_address.search('Municipalidad Metropolitana de Lima') !== -1) {
    formatted_address = formatted_address.replace(
      'Municipalidad Metropolitana de Lima',
      'Lima Metropolitana',
    );
    address.region = 'Lima Metropolitana';
  }
  if (formatted_address.search('Gobierno Regional de Lima') !== -1) {
    formatted_address = formatted_address.replace(
      'Gobierno Regional de Lima',
      'Región Lima',
    );
    address.region = 'Región Lima';
  }

  return {
    ...address,
    formatted_address,
    /* latitude,
      longitude */
  };
};

export function getStreetHomeCity(data: any) {
  const addressString =
    !data?.city && !data?.region && !data?.region
      ? data?.country
      : data?.street && data?.city
      ? data?.street + (data?.home ? ' ' + data?.home : '') + ', ' + data?.city
      : data?.formatted_address
          .replace(
            ', ' + data?.country,
            '',
          ) /* .replace(", " + data?.city, "") */
          .replace(', ' + data?.region, '');
  return addressString;
}
