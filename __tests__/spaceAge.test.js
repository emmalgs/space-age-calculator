import SpaceAge from "../src/js/spaceAge";

describe('SpaceAge', () => {
  test('should create an instance of an object when called', () => {
    let spaceAge = new SpaceAge()
    expect(typeof spaceAge).toEqual('object');
  });
});