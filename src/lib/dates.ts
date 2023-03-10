import moment from 'moment';

// Date String Like (3 Feb, 2023)
export function DateStringMonthYear(date: Date): string {
  if (date === null || date === undefined) return '';
  const format = String(moment(date).format('ll')).split(',');
  const _ = format[0].split(' ');
  return `${_[1]} ${_[0]}, ${format[1]}`;
}


// Basic Date Format like (03/02/2023)
export function basicFormat(date: Date): string {
  if (date === null || date === undefined) return '';
  const _ = String(moment(date).format('L')).split('/');
  return `${_[1]}/${_[0]}/${_[2]}`;
}


// date range build for mongodb date range query
export function dateRangeBuild(startDate: number, endDate: number): object {
  const _d_start = new Date(startDate)
    .toLocaleDateString(`fr-CA`)
    .split("/")
    .join("-");
  const _d_end = new Date(endDate)
    .toLocaleDateString(`fr-CA`)
    .split("/")
    .join("-");

  return {
    start: new Date(`${_d_start}T00:00:00.00Z`),
    end: new Date(`${_d_end}T23:59:59.999Z`),
  };
}



export function DateRangeToArray(start:Date, end:Date){
  return new Promise((resolve, reject) => {
   let dates = [];
   // loop two dates
   var a = moment(start);
   var b = moment(end);
   for (var m = moment(a); m.isBefore(b); m.add(1, 'days')) {
       dates.push(String(m.format('L')));
   }
   resolve({ dates })
  })
 }

