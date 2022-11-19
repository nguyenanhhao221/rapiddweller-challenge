/**
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 * @param date
 * @param options set the format date outcome, always set the default timeZone to Ho Chi Minh timezone
 * @returns return the format date or time base on the options, currently follow 'en-GB' for now
 */
export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string => {
  return new Intl.DateTimeFormat("en-GB", {
    ...options,
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(date);
};
