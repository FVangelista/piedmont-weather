import { gEl, cEl } from "../../utils/helpers";
import footerIcon from "../../assets/1.svg";
const bodyEl = gEl("body");

export default function footer() {
  const footer = cEl("div");
  footer.classList.add("footer");
  const logoIcon = cEl("img");
  logoIcon.classList.add("header_logo");
  const text = cEl("p");
  text.classList.add("text");
  const btn = cEl("a");
  btn.classList.add("text");
  btn.classList.add("btn_footer");

  btn.addEventListener("click", () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  });

  btn.textContent = "to top";

  text.innerHTML = "&copy; by filippo";

  logoIcon.src = footerIcon;

  bodyEl.appendChild(footer);
  footer.appendChild(logoIcon);
  footer.appendChild(text);
  footer.appendChild(btn);
}
