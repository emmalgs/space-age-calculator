import './css/styles.css';
import SpaceAge from "./js/spaceAge";

function displayPlanets(age) {
  const mercuryDiv = document.getElementById("mercury");
  const venusDiv = document.getElementById("venus");
  const earthDiv = document.getElementById("earth");
  const marsDiv = document.getElementById("mars");
  const jupiterDiv = document.getElementById("jupiter");

  mercuryDiv.querySelector("p").innerText = `${age.mercuryAge} years`;
  venusDiv.querySelector("p").innerText = `${age.venusAge} years`;
  earthDiv.querySelector("p").innerText = `${age.earthYears} years`;
  marsDiv.querySelector("p").innerText = `${age.marsAge} years`;
  jupiterDiv.querySelector("p").innerText = `${age.jupiterAge} years`;
}

function yearsSinceAge(e) {
  e.preventDefault();
  const age = parseInt(document.getElementById("earth-age").value);
  const years = parseInt(document.getElementById("past-bday").value);
  const form = document.getElementById("past-bday-form");
  const p = document.createElement("p");

  if (years > age) {
    p.innerText = `Please enter an age less than your current age`;
    return form.append(p);
  }

  let yearDif = age - years;
  checkForErrorParagraph(form, yearDif);

  document.getElementById("past-bday").value = null;
}

function yearsUntilAge(e) {
  e.preventDefault();
  const age = parseInt(document.getElementById("earth-age").value);
  const years = parseInt(document.getElementById("until-bday").value);
  const form = document.getElementById("until-bday-form");
  const p = document.createElement("p");

  if (years < age) {
    p.innerText = `Please enter an age greater than your current age`;
    return form.append(p);
  }

  let yearDif = years - age;
  checkForErrorParagraph(form, yearDif);
  
  document.getElementById("until-bday").value = null;
}

function checkForErrorParagraph(form, years) {
  if (!form.contains(form.querySelector("p"))) {
    let spaceAge = new SpaceAge(years);
    displayPlanets(spaceAge);
  } else {
    form.querySelector("p").remove();
    let spaceAge = new SpaceAge(years);
    displayPlanets(spaceAge);
  }
}

function handleAgeSubmit(e) {
  e.preventDefault();
  const earthAge = document.getElementById("earth-age").value;
  let spaceAge = new SpaceAge(earthAge);
  let forms = document.querySelectorAll("div.age-form");
  forms.forEach((form) => {
    form.classList.remove("hidden");
  });
  displayPlanets(spaceAge);
}



document.getElementById("earth-age-form").addEventListener("submit", handleAgeSubmit);
document.getElementById("past-bday-form").addEventListener("submit", yearsSinceAge);
document.getElementById("until-bday-form").addEventListener("submit", yearsUntilAge);