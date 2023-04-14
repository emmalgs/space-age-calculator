import Birthdays from "../src/js/birthdays";

describe('Birthdays', () => {
  let day;
  let month;
  let year;
  let birthday;

  beforeEach(() => {
    day = 13;
    month = 3;
    year = 1991;
    birthday = new Birthdays(day, month, year);
  })
  test('should create an instance of the object when called', () => {
    expect(typeof birthday).toEqual("object");
  });

  test('should create a date object set to the day, month, and year passed as arguments', () => {
    expect(birthday.earthBirthday.toString()).toEqual("Sat Apr 13 1991 00:00:00 GMT-0700 (Pacific Daylight Time)")
  });
});