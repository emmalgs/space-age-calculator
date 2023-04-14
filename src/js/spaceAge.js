export default class SpaceAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
    this.mercuryAge = this.mercuryYears(earthYears);
    this.venusAge = this.venusYears(earthYears);
    this.marsAge = this.marsYears(earthYears);
    this.jupiterAge = this.jupiterYears(earthYears);
    this.mayflies = this.mayflyLives(earthYears);
  }

  mercuryYears(years) {
    return parseFloat((years / 0.24).toFixed(2));
  }

  venusYears(years) {
    return parseFloat((years / 0.62).toFixed(2));
  }

  marsYears(years) {
    return parseFloat((years / 1.88).toFixed(2));
  }

  jupiterYears(years) {
    return parseFloat((years / 11.86).toFixed(2));
  }

  mayflyLives(years) {
    let minutes = 525600;
    return (years * minutes) / 5
  }
}