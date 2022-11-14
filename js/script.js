import { scrollFotogallery } from "./function.js";
import { search } from "./function.js";
import { button, button_search } from "./variables.js";
import { search_input } from "./variables.js";
import { screen } from "./variables.js";
import { addSearchListener } from "./function.js";


button.addEventListener("click",scrollFotogallery)

screen.addEventListener("keypress",function(event){
    addSearchListener()
})

button_search.addEventListener("click",addSearchListener)
