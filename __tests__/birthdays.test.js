import Birthdays from "../src/js/birthdays";

describe('Birthdays', () => {
  test('should create an instance of the object when called', () => {
    let birthday = new Birthdays();
    expect(typeof birthday).toEqual("object");
  })
})