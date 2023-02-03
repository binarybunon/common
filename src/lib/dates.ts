import moment from 'moment';

// Date String Like (3 Feb, 2023)
export function DateStringMonthYear(date:Date):string {
  if (date === null || date === undefined) return '';
  const format = String(moment(date).format('ll')).split(',');
  const _ = format[0].split(' ');
  return `${_[1]} ${_[0]}, ${format[1]}`;
}


// Basic Date Format like (03/02/2023)
export function basicFormat(date:Date):string {
  if (date === null || date === undefined) return '';
  const _ = String(moment(date).format('L')).split('/');
  return `${_[1]}/${_[0]}/${_[2]}`;
}
