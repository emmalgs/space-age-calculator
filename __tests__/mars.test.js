import MarsAge from "../src/js/mars";

describe('MarsAge', () => {
  test('should create an instance of an object when called', () => {
    let marsAge = new MarsAge()
    expect(typeof marsAge).toEqual('object');
  });
});