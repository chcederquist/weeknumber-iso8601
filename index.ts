
export function getWeekNumberISO8601(date: Date): number {
  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  const year = date.getFullYear()
  const firstDayOfYear = new Date(year, 0); // 1 is default day
  let weekdayOfFirstDayOfYear = (firstDayOfYear.getDay()+6) %7; // Normalise monday as 0th day, sunday as 6th
  let firstWeekNumber: number;
  if (weekdayOfFirstDayOfYear < 4) {
    // On or before first thursday of the year
    firstWeekNumber = 1;
  } else {
    // After first thursday of the year
    firstWeekNumber = 0;
  }
  const firstDayOfFirstWeekMs = +firstDayOfYear - weekdayOfFirstDayOfYear * dayInMilliseconds;
  const dayDifferenceMs = +date - firstDayOfFirstWeekMs;
  const weekDifference = Math.floor(dayDifferenceMs / dayInMilliseconds / 7);
  const weekNumber = firstWeekNumber + weekDifference;
  return weekNumber || getWeekNumberISO8601(
    new Date(year - 1, 11, 31)
  );
}
