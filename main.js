import './style.css'

const APi_URL = "https://api.adviceslip.com/advice";

const advice_number = document.getElementById("advice_number");

const advice = document.getElementById("advice");

const button = document.getElementById("button");

async function getAdvice () {
  const data = await fetch(APi_URL);
  const result = await data.json();
  return result.slip;
}

async function render() {
  const data = await getAdvice();
  advice_number.innerText = `Advice #${data.id}`;
  advice.innerText = `"${data.advice}"`;
}

button.addEventListener("click", () => {
  render();
})