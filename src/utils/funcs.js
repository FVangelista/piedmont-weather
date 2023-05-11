import { deleteBefore, gEl } from "./helpers";
import logoDark from "../assets/2.svg";
import logoLight from "../assets/3.svg";

// Dark & Light mode
function darkMode(control) {
  const bodyEl = gEl("body");
  const header = gEl(".header");
  const logoImg = gEl(".logo-img ");
  const logoInner = gEl(".logo_text_inner");
  const footer = gEl(".footer");

  bodyEl.classList.toggle("bg_dark");
  header.classList.toggle("bg_dark_blue");
  logoInner.classList.toggle("text_dark");
  footer.classList.toggle("bg_dark_blue");

  if (control) {
    deleteBefore();
    logoImg.src = logoDark;
  } else {
    logoImg.src = logoLight;
  }
}

// Filter
const dataFilter = (select, display, data, wrapper, control) => {
  select.addEventListener("change", () => {
    deleteBefore();
    if (select.value === "All") {
      display(data, wrapper, control);
    } else {
      const filterData = data.filter((item) => {
        if (item.name.includes(select.value)) {
          return item;
        }
      });
      display(filterData, wrapper, control);
    }
  });
};

// Map - api init
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    mapId: "a25ede39525eec8e",
    center: { lat: 45, lng: 7 },
    zoom: 7,
    maxZoom: 7,
    minZoom: 7,
    disableDefaultUI: true,
  });

  let myMapType = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom) {
      return `https://tile.openweathermap.org/map/precipitation/${zoom}/${coord.x}/${coord.y}.png?appid=${process.env.API_SECRETE}`;
    },
    tileSize: new google.maps.Size(256, 256),
    name: "mymaptype",
  });

  let beachMarker = new google.maps.Marker({
    position: { lat: 45, lng: 8 },
    map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  });

  map.overlayMapTypes.insertAt(0, myMapType);
}

export { initMap, darkMode, dataFilter };
