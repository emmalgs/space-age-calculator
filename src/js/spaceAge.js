export default class SpaceAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
  }

  marsAge() {
    return parseFloat((this.earthYears / 1.88).toFixed(2));
  }
}