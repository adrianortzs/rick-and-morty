const previousButton = document.getElementById("prev-page")
const nextButton = document.getElementById("next-page")
const listaPersonajes = document.getElementById("character-list")
let page = 1

function fetchAPI (){
    
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        listaPersonajes.innerHTML = ""
        data.results.forEach(personaje => {
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `
              <img src="${personaje.image}" alt="${personaje.name}">
              <p><b>Name:</b> ${personaje.name}</p>
              <p><b>Species:</b> ${personaje.species}</p>`
            listaPersonajes.appendChild(contenedor)
        });
    })
    .catch(error => console.error('Error fetching characters:', error))
}

previousButton.addEventListener("click", function (){
    page--
    fetchAPI()
})

nextButton.addEventListener("click", function (){
    page++
    fetchAPI()
})

fetchAPI()