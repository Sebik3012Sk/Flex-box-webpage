const button = document.querySelector(".button-first")
const scrollTos = document.querySelector(".fotogallery-text").offsetTop

export function scrollFotogallery(event){
    setTimeout(function(){
        window.scrollTo({
            top : scrollTos,
            behavior : "smooth"
        })
    },150)
}

// const search_input = document.querySelector(".search-input")

let list_data = []

export function search(event){
    list_data.push(event.target.value)
    let json_data = JSON.stringify(list_data)
    localStorage.setItem("search",json_data)


    let parse_data = JSON.parse(localStorage.getItem("search"))

    console.log(parse_data[1])

    let list_destinatiaon = ["španělsko","Španělsko"]
    
    for(let d of list_destinatiaon){
        if(parse_data[0] == d){
            location.assign("https://www.blue-style.cz/first-minute/?gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEHCzH0spc9PDTDlpPS5n7n855kTXLale1B_FhWVExSXrrjgvLx9lWQaAskJEALw_wcB")
        } else if(parse_data[0] !== d) {
            var error_element = document.createElement("p")
            error_element.textContent = `We cannot find your text`
            error_element.classList.add("error_text")

            document.querySelector(".error-div").appendChild(error_element)
        } else {
            error_element.textContent = "";
        }

    }
}