import { gEl, cEl, time } from "../../utils/helpers";
import data from "../../utils/mock/piedmontData";
import logoDay from "../../assets/3.svg";

const bodyEl = gEl("body");

export default function about() {
  const about = cEl("div");
  about.classList.add("about");
  const logo = cEl("div");
  logo.classList.add("logo");
  const logoText = cEl("h1");
  logoText.classList.add("logo_text");
  const logoTextInner = cEl("span");
  logoTextInner.classList.add("logo_text_inner");
  const logoImg = cEl("img");
  logoImg.classList.add("logo-img");
  const btn = cEl("button");
  btn.classList.add("btn");
  btn.id = "btn";
  btn.textContent = "Dark / Light";

  logoImg.src = logoDay;

  const textWrapper = cEl("div");
  textWrapper.classList.add("text_wrapper");
  const textInfo = cEl("p");
  textInfo.classList.add("text_info");

  textInfo.textContent = data.description;

  logoText.textContent = data.title;
  logoTextInner.textContent = data.appTitle;

  bodyEl.appendChild(about);
  about.appendChild(logo);
  logo.appendChild(logoImg);
  logo.appendChild(logoText);
  logoText.appendChild(logoTextInner);
  about.appendChild(btn);
  about.appendChild(textWrapper);
  textWrapper.appendChild(textInfo);
}
