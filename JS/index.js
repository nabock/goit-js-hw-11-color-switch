
import colors from "./colors.js"


const refs = {
  body: document.body,
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
}


refs.btnStart.addEventListener('click', colorSwitchStart);

refs.btnStop.addEventListener('click', colorSwitchStop);

refs.btnStop.disabled = true;

let intervalID
// start button is pressed
function colorSwitchStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  // console.log('START')
  return intervalID = setInterval(colorSwitch, 1000)

}

// stop button is pressed

function colorSwitchStop() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(intervalID);
  // console.log('STOP')
}
// color generation

function colorSwitch() {

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let i = randomIntegerFromInterval(0, colors.length - 1);

  refs.body.style.backgroundColor = `${colors[i]}`

}