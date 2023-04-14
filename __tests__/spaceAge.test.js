import SpaceAge from "../src/js/spaceAge";

describe('SpaceAge', () => {
  let spaceAge;
  let earthYears;

  beforeEach(() => {
    earthYears = 32;
    spaceAge = new SpaceAge(earthYears);
  })

  test('should create an instance of an object when called', () => {
    expect(typeof spaceAge).toEqual('object');
  });

  test('should take an earthYears argument and return when property earthYears is called', () => {
    expect(spaceAge.earthYears).toEqual(32);
  });

  test('should have a property to calculate mars years with a value typeof number', () => {
    expect(spaceAge.marsAge).toEqual(Number(spaceAge.marsAge));
  });

  test('should accurately calculate mars years based on earth years', () => {
    expect(spaceAge.marsAge).toEqual(17.02);
  });
});