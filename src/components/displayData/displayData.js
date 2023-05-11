import { cEl, day } from "../../utils/helpers";
import cardLight from "../../assets/4.svg";
import cardDark from "../../assets/5.svg";

const displayData = (data, wrapper, control) => {
  data.forEach((item) => {
    const card = cEl("div");
    card.classList.add("card");
    const prov = cEl("h3");
    prov.classList.add("province");
    prov.textContent = item.name;
    const nowTemp = cEl("h2");
    nowTemp.classList.add("now");
    nowTemp.textContent = `${Math.round(item.main.temp)}°`;
    const maxMin = cEl("div");
    maxMin.classList.add("maxMin");
    const max = cEl("p");
    max.classList.add("text");
    const min = cEl("p");
    min.classList.add("text");
    const addInfo = cEl("div");
    addInfo.classList.add("addInfo");
    const weekDay = cEl("p");
    weekDay.classList.add("text");
    weekDay.textContent = day;
    const icon = cEl("img");
    icon.classList.add("icon");

    const bgImg = cEl("img");
    bgImg.classList.add("bgImg");

    if (control) {
      bgImg.src = cardDark;
    } else {
      bgImg.src = cardLight;
    }

    icon.src = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;

    max.textContent = `max: ${Math.round(item.main.temp_max)}°`;
    min.textContent = `min: ${Math.round(item.main.temp_min)}°`;

    if (
      prov.textContent.includes("Province of ") ||
      prov.textContent.includes("Provincia di ")
    ) {
      prov.textContent = prov.textContent.slice(12);
    }

    wrapper.appendChild(card);
    card.appendChild(bgImg);
    card.appendChild(prov);
    card.appendChild(nowTemp);
    card.appendChild(maxMin);
    maxMin.appendChild(max);
    maxMin.appendChild(min);
    card.appendChild(addInfo);
    addInfo.appendChild(weekDay);
    addInfo.appendChild(icon);
  });
};

export default displayData;
