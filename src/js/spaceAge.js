export default class SpaceAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
    this.marsAge = parseFloat((this.earthYears / 1.88).toFixed(2));
  }
}