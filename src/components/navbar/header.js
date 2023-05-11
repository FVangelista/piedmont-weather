import { gEl, cEl } from "../../utils/helpers";
import { GET } from "../../utils/http";

const bodyEl = gEl("body");

export default function header() {
  const header = cEl("div");
  header.classList.add("header");
  const logoHeader = cEl("img");
  logoHeader.classList.add("header_logo");
  const weatherIcon = cEl("img");
  weatherIcon.classList.add("header_logo");
  const text = cEl("p");
  text.classList.add("text");
  const btn = cEl("button");
  btn.classList.add("btn");
  btn.id = "btn";
  btn.textContent = "Dark / Light";

  GET("piedmont").then((data) => {
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    text.textContent = `Italy, Piedmont ${Math.round(data.main.temp)}°c - ${
      data.weather[0].description
    }`;
  });

  logoHeader.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Piedmont.svg/32px-Flag_of_Piedmont.svg.png";

  bodyEl.appendChild(header);
  header.appendChild(logoHeader);
  header.appendChild(text);
  header.appendChild(weatherIcon);
  header.appendChild(btn);
}
