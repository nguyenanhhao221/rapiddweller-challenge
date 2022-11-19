/**
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 * @param date
 * @param options
 * @returns return the format date or time base on the options, currently follow 'en-GB' for now
 */
export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string => {
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};
