export default class SpaceAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
    this.mercuryAge = this.mercuryYears(earthYears);
    this.venusAge = parseFloat((this.earthYears / 0.62).toFixed(2));
    this.marsAge = parseFloat((this.earthYears / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.earthYears / 11.86).toFixed(2));
  }

  mercuryYears(years) {
    return parseFloat((years / 0.24).toFixed(2));
  }
}