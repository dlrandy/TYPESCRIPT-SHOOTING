export default ''

function ask() {
  return prompt('when is your birthday?')
}

function parse(birthday:string):Date {
  return new Date(birthday)
}

let date = parse(ask())


function isValid(date:Date) {
  return Object.prototype.toString.call(date) === '[object Date]' &&
   !Number.isNaN(date.getTime())
}

function parse2(birthday:string): Date | null {
  let date = new Date(birthday)
  if (!isValid(date)) {
    // return null
    throw new RangeError('Enter a date in the form YYYY/MM/D')
  }
  return date
}
class InvalidDateFormatError extends RangeError{}
class DateIsInTheFutureError extends RangeError{}
function parse3(birthday:string): Date  {
  let date = new Date(birthday)
  if (!isValid(date)) {
    // return null
    throw new RangeError('Enter a date in the form YYYY/MM/D')
  }
  return date
}

try {
  let date2 = parse2(ask())

console.info('Date is ', date2.toISOString())
} catch (error) {
  // if (error instanceof RangeError) {
  //   console.error(error.message);
  // } else {
  //   throw error
  // }

}























