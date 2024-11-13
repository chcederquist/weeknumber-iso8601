import { getWeekNumberISO8601 } from "./index";
const weekInMilliseconds = 1000 * 60 * 60 * 24 * 7;

describe('Test of JobnetDateUtils', () => {
  it('Correctly calculates first week of 2024', () => {
    const weekNumber = getWeekNumberISO8601(new Date(2024, 0, 1));
    expect(weekNumber).toBe(1);
  });

  it('Correctly calculates week 53 in 2024', () => {
    const weekNumber = getWeekNumberISO8601(
      new Date(2024, 11, 31)
    );
    expect(weekNumber).toBe(53);
  });

  it('Correctly assigns previous year weeks if first weekday >= friday', () => {
    const weekNumber = getWeekNumberISO8601(new Date(2027, 0, 1));
    expect(weekNumber).toBe(53);
  });

  it('Correctly calculates every week number in 2024', () => {
    const firstWeekNumber = getWeekNumberISO8601(
      new Date(2024, 0, 4)
    ); // First thursday of 2024
    for (
      let date = new Date(2024, 0, 4), expectedWeek = firstWeekNumber;
      date.getFullYear() === 2024;
      date.setTime(date.getTime() + weekInMilliseconds), expectedWeek++
    ) {
      // Every thursday
      const weekNumber = getWeekNumberISO8601(date);
      expect(weekNumber).toBe(expectedWeek);
    }
  });
});
