// импорт  массива цветов------------------------------------
import colors from "./colors.js"

// массив констант------------------------------------------
const refs = {
    body: document.body,
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}
// события на кнопки---------------------------------------
refs.btnStart.addEventListener('click', colorSwitchStart);

refs.btnStop.addEventListener('click', colorSwitchStop);

 refs.btnStop.disabled = true;

let intervalID
// при нажатии кнопки старт---------------------------
function colorSwitchStart() {
    refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  // console.log('START')
  return intervalID = setInterval(colorSwitch, 1000)
  
}

// при нажатии кнопки стоп---------------------------

function colorSwitchStop() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(intervalID);
    // console.log('STOP')
}
// генерация случайного цвета---------------------------

function colorSwitch() {

  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let i = randomIntegerFromInterval(0, colors.length-1);
  
  refs.body.style.backgroundColor = `${colors[i]}`
  // let N = i + 1
  //   console.log(`color ${colors[i]} by № ${N} from colors list`)
}