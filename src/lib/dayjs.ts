import dayjs, { Dayjs } from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(isSameOrAfter);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(utc);

const DateTimeUTC = (...args) => {
  return dayjs(...args).utc();
}

export {
  DateTimeUTC, 
  duration as dayjsDuration,
  relativeTime as dayjsRelativeTime,
  localeData as dayjsLocaleData,
  dayjs,
  Dayjs
}