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

  test('should have properties for Mercury, Venus, and Jupiter that calculate the human age on each planet based on earthYears', () => {
    expect(spaceAge.mercuryAge).toEqual(133.33);
    expect(spaceAge.venusAge).toEqual(51.61);
    expect(spaceAge.jupiterAge).toEqual(2.70);
  });

  test('should have a method to calculate Mercury years that returns 0 when called with 0 as the argument', () => {
    expect(spaceAge.mercuryYears(0)).toEqual(0);
  });

  test('should calculate Marcury years when earth years are passed as argument', () => {
    expect(spaceAge.mercuryYears(12)).toEqual(50.00);
  });

  test('should have methods for Venus, Mars and Jupieter that return correct year when earth years argument passed', () => {
    expect(spaceAge.marsYears(12)).toEqual(6.38);
    expect(spaceAge.venusYears(12)).toEqual(19.35);
    expect(spaceAge.jupiterYears(12)).toEqual(1.01);
  });
});