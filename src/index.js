import './css/styles.css';
import SpaceAge from "./js/spaceAge";

function displayPlanets(age) {
  const mercuryDiv = document.getElementById("mercury");
  const venusDiv = document.getElementById("venus");
  const earthDiv = document.getElementById("earth");
  const marsDiv = document.getElementById("mars");
  const jupiterDiv = document.getElementById("jupiter");

  mercuryDiv.querySelector("p").innerText = age.mercuryAge;
  venusDiv.querySelector("p").innerText = age.venusAge;
  earthDiv.querySelector("p").innerText = age.earthYears;
  marsDiv.querySelector("p").innerText = age.marsAge;
  jupiterDiv.querySelector("p").innerText = age.jupiterAge;
}

function handleAgeSubmit(e) {
  e.preventDefault();
  const earthAge = document.getElementById("earth-age").value;
  let spaceAge = new SpaceAge(earthAge);
  let forms = document.querySelectorAll("div.age-form");
  forms.forEach((form) => {
    form.classList.remove("hidden")
  });
  displayPlanets(spaceAge);
}



document.getElementById("earth-age-form").addEventListener("submit", handleAgeSubmit);