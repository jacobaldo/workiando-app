import moment from 'moment';

export const monthsShort = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

export const monthsLarge = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const dayLarge = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
const dayShort = ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'];

const workDay = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const workDayShort = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];

const DAY_IN_MILISECONDS = 1000 * 3600 * 24;

export const daysWithID = [
  {
    id: 0,
    name: 'Domingo',
    shortName: 'Dom',
  },
  {
    id: 1,
    name: 'Lunes',
    shortName: 'Lun',
  },
  {
    id: 2,
    name: 'Martes',
    shortName: 'Mar',
  },
  {
    id: 3,
    name: 'Miércoles',
    shortName: 'Mie',
  },
  {
    id: 4,
    name: 'Jueves',
    shortName: 'Jue',
  },
  {
    id: 5,
    name: 'Viernes',
    shortName: 'Vie',
  },
  {
    id: 6,
    name: 'Sábado',
    shortName: 'Sab',
  },
];

export const weekDaysWithID = daysWithID.filter(
  item => item.id !== 0 && item.id !== 6,
);

export const locales = {
  monthNames: monthsLarge,
  monthNamesShort: monthsShort,
  dayNames: dayLarge,
  dayNamesShort: dayShort,
  workDayNames: workDay,
  workDayNamesShort: workDayShort,
  today: 'Hoy',
};

export const pad = (n: number) => {
  return n < 10 ? '0' + n : n;
};

const isToday = (someDate: Date) => {
  return moment(someDate).isSame(moment(), 'day');
};

const isYesterday = (someDate: Date) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    someDate.getDate() === yesterday.getDate() &&
    someDate.getMonth() === yesterday.getMonth() &&
    someDate.getFullYear() === yesterday.getFullYear()
  );
};

export const transactionTitleDate = (date: string, separator: string) => {
  const dateParts = date.split(separator);
  var mydate = new Date(date);
  return isToday(mydate)
    ? 'Hoy'
    : dateParts[2] + ' de ' + monthsLarge[Number(dateParts[1]) - 1];
};

export const dateFormat = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '' || date === null) {
    return '-- --- ----';
  }
  const tempDate = moment(date).format('yyyy-MM-DD');
  const dateobj = new Date(tempDate?.replace(/-/g, '/'));
  const result =
    pad(dateobj.getDate()) +
    ' ' +
    monthsShort[dateobj.getMonth()] +
    ' ' +
    dateobj.getFullYear();
  return result;
};

export const dateFormatMid = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '-- ---';
  }
  const dateobj = new Date(date.replace(/-/g, '/'));
  const result =
    pad(dateobj.getDate()) + ' ' + monthsShort[dateobj.getMonth()] + '.';
  return result;
};
export const dateFormatDayMont = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '-- ---';
  }
  const dateobj = new Date(date);
  const result = pad(dateobj.getDate()) + ' ' + monthsShort[dateobj.getMonth()];
  return result;
};

export const dateFormatMidES = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '-- ---';
  }
  const dateobj = new Date(date.replace(/-/g, '/'));
  const result =
    pad(dateobj.getDate()) + ' de ' + monthsLarge[dateobj.getMonth()];
  return result;
};

export const dateFormatMidLarge = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '----- -- ------';
  }
  const dateobj = new Date(date.replace(/-/g, '/'));
  const result =
    dayLarge[dateobj.getDay()] +
    ' ' +
    pad(dateobj.getDate()) +
    ' de ' +
    monthsLarge[dateobj.getMonth()] +
    '';
  return result;
};
export const dateFormatLarge = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '----- -- ------';
  }
  const dateobj = new Date(date.replace(/-/g, '/'));
  const result =
    dayLarge[dateobj.getDay()] +
    ' ' +
    pad(dateobj.getDate()) +
    ' de ' +
    monthsLarge[dateobj.getMonth()] +
    ' ' +
    dateobj.getFullYear();
  return result;
};
export const dateFormatConcat = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '----- -- ------';
  }
  const dateobj = new Date(date);
  const result =
    pad(dateobj.getDate()) +
    ' de ' +
    monthsLarge[dateobj.getMonth()] +
    ' ' +
    dateobj.getFullYear();
  return result;
};
export const dateFormatConcatMid = (date: string = '') => {
  if (date === '') {
    return '----- -- ------';
  }

  const dateUTC = new Date(date);

  const localDate = new Date(
    dateUTC.getTime() + dateUTC.getTimezoneOffset() * 60000,
  );

  const result =
    pad(localDate.getDate()) + ' de ' + monthsLarge[localDate.getMonth()];
  return result;
};
export const dateFormatFull = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  date = date.replace('T', ' ');
  if (date === '') {
    return '-- --- ----';
  }
  const dateobj = new Date(date.replace(/-/g, '/'));
  const result =
    pad(dateobj.getDate()) +
    ' ' +
    monthsLarge[dateobj.getMonth()] +
    ' ' +
    dateobj.getFullYear();
  return result;
};

export const formatAMPM = (date: Date): string => {
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm: string = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

export const timeFormat24 = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  if (date === '') {
    return '--:---';
  }
  const dateobj = new Date(date.replace(/-/g, '/'));
  const result = pad(dateobj.getHours()) + ':' + pad(dateobj.getMinutes());

  return result;
};

export const timeFormat12 = (date: string = '') => {
  //FORMTAT dd Mon yyyy
  // date = moment(date).format("yyyy-MM-DD");
  // date = date.replace('T', ' ');
  if (date === '') {
    return '--:--- --';
  }

  // const dateobj = new Date(date.replace(/-/g, '/'));
  const dateobj = new Date(date);

  let hours = dateobj.getHours();
  let minutes = dateobj.getMinutes();
  const ampm = hours >= 12 ? 'p.m.' : 'a.m.';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const result = hours.toString() + ':' + pad(minutes) + ' ' + ampm;

  return result;
};

export const diff_minutes = (dt2: any, dt1: any) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
};

export const firstDayOfMonth = (date: Date) => {
  const newDate = new Date(date.getFullYear(), date.getMonth(), 1);
  return newDate;
};

export const lastDayofMonth = (date: Date) => {
  const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return newDate;
};

export const getDaysArray = function (start: Date, end: Date) {
  for (
    var arr = [], dt = new Date(start);
    dt <= end;
    dt.setMonth(dt.getMonth() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};

export const num_difDays = (startDate: string, endDate?: string) => {
  const today = moment(endDate ? endDate : new Date()).format('yyyy-MM-DD');
  const days = moment(startDate).diff(moment(today), 'days');

  return days;
};

//this function returns if the date is today, yesterday
export const DateToTitle = (date: string, separator: string) => {
  const formatDate = date.split(' ')[0];
  const dateParts = formatDate.split(separator);
  var mydate = new Date(date);
  return isToday(mydate)
    ? 'Hoy'
    : isYesterday(mydate)
    ? 'Ayer'
    : dateParts[2] + ' de ' + monthsLarge[Number(dateParts[1]) - 1];
};

export const getDateWithFirtsDay = (date: Date) => {
  const newDate =
    '01' + '/' + pad(date.getMonth() + 1) + '/' + date.getFullYear();
  return newDate;
};

export const getMonthShortCategory = (date: Date) => {
  const momentString0 = new Date(moment(date).add(-2, 'months').toISOString());
  const momentString1 = new Date(moment(date).add(-1, 'months').toISOString());
  const momentString2 = new Date(moment(date).toISOString());
  return [
    monthsShort[momentString0.getMonth()],
    monthsShort[momentString1.getMonth()],
    monthsShort[momentString2.getMonth()],
  ];
};

export const subtractMonths = (date: Date, months: number) => {
  date.setMonth(date.getMonth() - months);
  return date;
};

export const formatDateToCalendarFilterDate = (value: string | Date) => {
  return moment(value).format('YYYY-MM-DD');
};

export const formatMonthAndYear = (date: string) => {
  //date entry example "2023-01-25"
  const newDate = new Date(date);
  const options: any = {year: 'numeric', month: 'long', day: undefined};
  const formatDate = newDate.toLocaleDateString('es-ES', options);
  const result = formatDate.replace(/de /, '');
  //output example enero 2023
  return result;
};

export const dateFormatMonthAndYearES = (dateString: string) => {
  const [year, month] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1);
  const monthName = monthsLarge[date.getMonth()];
  const yearNumber = date.getFullYear();
  return `${monthName} ${yearNumber}`;
};

export const dateFormatMonthShortYearAndDayES = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1);
  const monthName = monthsShort[date.getMonth()];
  const yearNumber = date.getFullYear();
  return `${day} ${monthName}, ${yearNumber}`;
};

export const formatDateToDDMMYYYY = (date: Date) => {
  if (!(date instanceof Date)) {
    return '--/--/----';
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
  // output dd/mm/yyyy
};

// input dd-mm-yyyy -> output dd/mm/yyyy
export const formatDateWithSlash = (date: string) =>
  date && date.replace(/-/g, '/');

export const formatShortDate = (inputDate: string) => {
  const [month, day, year] = inputDate.split('-');
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  // Convert month to abbreviated format
  const abbreviatedMonth = months[parseInt(month, 10) - 1];

  // Format the date in the new format
  return `${day} ${abbreviatedMonth} ${year}`;
};

export const differenceSinceToday = (value: string) => {
  const today = new Date();
  const checkDate = new Date(value);
  const Difference_In_Time = today.getTime() - checkDate.getTime();
  const Difference_In_Days = Math.ceil(Difference_In_Time / DAY_IN_MILISECONDS);
  return Math.trunc(Difference_In_Days);
};
