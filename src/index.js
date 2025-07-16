import "./styles.css";
import homeBtn from "./home";

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");
const content = document.querySelector("#content");
home.addEventListener("click", homeBtn);

homeBtn();
