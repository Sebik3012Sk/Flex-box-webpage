import { scrollTos } from "./variables.js";
import { search_input } from "./variables.js";


export function scrollFotogallery(event){
    setTimeout(function(){
        window.scrollTo({
            top : scrollTos,
            behavior : "smooth"
        })
    },150)

    
}



let list_data = []

export function search(event){
    list_data.push(event.target.value)
    let json_data = JSON.stringify(list_data)
    localStorage.setItem("search",json_data)



    let parse_data = JSON.parse(localStorage.getItem("search"))

    console.log(parse_data)

    let list_destinatiaon = ["španělsko","Španělsko"]
    
    for(let d of list_destinatiaon){
        if(parse_data[0] == d){
            location.assign("https://www.blue-style.cz/first-minute/?gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEHCzH0spc9PDTDlpPS5n7n855kTXLale1B_FhWVExSXrrjgvLx9lWQaAskJEALw_wcB")
            break;
        }
    }

    event.target.value = "";
}

export function addSearchListener(){
    search_input.addEventListener("change",search)
}

