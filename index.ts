const dayInMilliseconds = 1000 * 60 * 60 * 24;

export function getWeekNumberISO8601(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  let weekdayOfFirstDayOfYear = firstDayOfYear.getDay() - 1;
  if (weekdayOfFirstDayOfYear === -1) {
    weekdayOfFirstDayOfYear = 6; // Normalise sunday for ISO-8601
  }
  let firstWeekNumber: number;
  if (weekdayOfFirstDayOfYear < 4) {
    // On or before first thursday of the year
    firstWeekNumber = 1;
  } else {
    // After first thursday of the year
    firstWeekNumber = 0;
  }
  const firstDayOfFirstWeekMs =
    firstDayOfYear.getTime() - weekdayOfFirstDayOfYear * dayInMilliseconds;
  const dayDifferenceMs = date.getTime() - firstDayOfFirstWeekMs;
  const weekDifference = Math.floor(dayDifferenceMs / dayInMilliseconds / 7);
  const weekNumber = firstWeekNumber + weekDifference;
  if (weekNumber === 0) {
    // This day is part of last week of last year. Calculate last year's last week
    return getWeekNumberISO8601(
      new Date(date.getFullYear() - 1, 11, 31)
    );
  }
  return weekNumber;
}
