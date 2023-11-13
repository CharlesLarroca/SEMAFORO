const semaforo = document.querySelector("#semaforo");
const buttons = document.querySelector("#buttons");
let colorIndex = 0;
let intervalID;

const trafficLight = (e) => {
  const el = e.target;
  stopAutomatic()
  turnON[el.id]();
};

const nextIndex = () => colorIndex < 2 ? colorIndex++ : (colorIndex = 0);

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnON[color]();
  nextIndex();
};

const stopAutomatic = () => {
  clearInterval(intervalID);
};

const turnON = {
  red: () => semaforo.src = "./img/vermelho.png",
  yellow: () => semaforo.src = "./img/amarelo.png",
  green: () => semaforo.src = "./img/verde.png",
  auto: () => intervalID = setInterval(changeColor, 1000),
};

buttons.addEventListener("click", trafficLight);
