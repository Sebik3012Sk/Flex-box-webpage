import { scrollFotogallery } from "./function.js";
import { search } from "./function.js";

const button = document.querySelector(".button-first")

button.addEventListener("click",scrollFotogallery)

const search_input = document.querySelector(".search-input")

search_input.addEventListener("change",search)