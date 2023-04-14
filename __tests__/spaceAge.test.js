import SpaceAge from "../src/js/spaceAge";

describe('SpaceAge', () => {
  test('should create an instance of an object when called', () => {
    let spaceAge = new SpaceAge()
    expect(typeof spaceAge).toEqual('object');
  });

  test('should take an earthYears argument and return when property earthYears is called', () => {
    let spaceAge = new SpaceAge(32);
    expect(spaceAge.earthYears).toEqual(32);
  });
});