let content = document.querySelector("#content");
let text1 = "Yup";
import { loadh1, loadimg } from "./first-load";
let menu = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  loadh1();
  loadimg();
  let h2 = document.createElement("h2");
  h2.innerText = text1;
  h2.style.color = "#ffffff";
  h2.style.textAlign = "center";
  content.appendChild(h2);
};

export { menu };
