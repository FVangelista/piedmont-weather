import { initMap } from "./utils/funcs";

import "./styles/main.scss";

import header from "./components/navbar/header";
import hero from "./components/hero/hero";
import about from "./components/about/about";
import mainContent from "./components/mainContent/mainContent";
import footer from "./components/footer/footer";

window.addEventListener("DOMContentLoaded", header);
window.addEventListener("DOMContentLoaded", hero);
window.addEventListener("DOMContentLoaded", about);
window.addEventListener("DOMContentLoaded", mainContent);
window.addEventListener("DOMContentLoaded", footer);

window.initMap = initMap;
