const refs = {
  boxesContainer: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  clearBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls > input"),
  width: 30,
  height: 30,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.createBtn.addEventListener("click", onCreateBoxes);
refs.clearBtn.addEventListener("click", onClearBoxesContainer);

function onCreateBoxes() {
  const boxes = createBoxes(refs.input.value);
  refs.boxesContainer.append(...boxes);
}

function createBoxes(amount) {
  const colorSet = [];
  for (let i = 0; i < amount; i += 1) {
    colorSet.push(getRandomHexColor());
  }
  return colorSet.map((element) => {
    const box = document.createElement("div");
    box.style.width = `${refs.width}px`;
    box.style.height = `${refs.height}px`;
    box.style.backgroundColor = element;
    box.style.marginBottom = "20px";
    refs.width += 10;
    refs.height += 10;
    return box;
  });
}

function onClearBoxesContainer() {
  refs.boxesContainer.innerHTML = "";
  refs.width = 30;
  refs.height = 30;
}

/*
const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const createBoxes = amount => {
  const elementsToAdd = []
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
    div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor()
    elementsToAdd.push(div)
  }
  return elementsToAdd
}

const destroyBoxes = () => {
  boxes.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value)
  boxes.append(...boxesToAdd)
})

console.log(inputNum.value)

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call()
})
*/

/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
количество элементов в input и нажимает кнопку Создать, после чего 
рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов
 очищается.


Создай функцию createBoxes(amount), которая принимает один параметр -
 число. Функция создает столько <div>, сколько указано в amount и 
 добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй 
готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
 тем самым удаляя все созданные элементы.
*/