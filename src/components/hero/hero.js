import { gEl, cEl } from "../../utils/helpers";

const bodyEl = gEl("body");

export default function hero() {
  const map = cEl("div");
  map.id = "map";
  map.alt = "maps";
  const script = cEl("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD3uV5cE8vTNzvY9bH978RYdyxj1LaGJvw&callback=initMap`;
  script.defer;

  bodyEl.appendChild(script);
  bodyEl.appendChild(map);
}
