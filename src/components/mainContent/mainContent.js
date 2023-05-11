import { gEl, cEl, deleteBefore } from "../../utils/helpers";
import { darkMode, dataFilter } from "../../utils/funcs";
import { GET } from "../../utils/http";
import displayData from "../displayData/displayData";

const bodyEl = gEl("body");

const selection = [
  "All",
  "Turin",
  "Biella",
  "Asti",
  "Cuneo",
  "Alessandria",
  "Vercelli",
  "Novara",
  "Verbania",
];

const piedmont = selection.slice(1).map((item) => GET(item));

export default function mainContent() {
  const mainContent = cEl("div");
  mainContent.classList.add("main_content");
  const select = cEl("select");
  select.classList.add("selection");
  select.name = "cities";
  const cardsWrapper = cEl("div");
  cardsWrapper.classList.add("cards_wrapper");

  const btn = gEl(".btn");
  let control = false;

  selection.forEach((item) => {
    const option = cEl("option");
    option.value = item;

    option.textContent = item;

    select.appendChild(option);
  });

  Promise.all(piedmont).then((data) => {
    displayData(data, cardsWrapper, control);
    dataFilter(select, displayData, data, cardsWrapper, control);

    btn.addEventListener("click", () => {
      control = !control;
      deleteBefore();
      darkMode(control);
      displayData(data, cardsWrapper, control);
      dataFilter(select, displayData, data, cardsWrapper, control);
      select.value = "All";
    });
  });

  bodyEl.appendChild(mainContent);
  mainContent.appendChild(select);
  mainContent.appendChild(cardsWrapper);
}
