import './css/styles.css';
import SpaceAge from "./js/spaceAge";

function handleAgeSubmit(e) {
  e.preventDefault();
  const earthAge = document.getElementById("earth-age").value;
  let spaceAge = new SpaceAge(earthAge);
  console.log(spaceAge);
}

document.getElementById("earth-age-form").addEventListener("submit", handleAgeSubmit)