const gEl = (selection) => {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  } else {
    throw Error(`Such element ${selection} does not exist.`);
  }
};

const cEl = (el) => document.createElement(el);

// Current Date

let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate = new Date();
let time =
  currentDate.getHours() +
  "." +
  currentDate.getMinutes() +
  "." +
  currentDate.getSeconds();
let day = weekday[currentDate.getDay()];

const deleteBefore = () => {
  const usersEl = document.querySelectorAll(".card");
  const error = document.querySelectorAll(".error");

  error.forEach((error) => {
    error.remove();
  });

  usersEl.forEach((user) => user.remove());
};

export { deleteBefore, gEl, cEl, time, day };
