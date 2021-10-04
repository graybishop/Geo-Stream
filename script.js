
var storageArray = []




var form = document.querySelector("#form")
var searchBar = document.querySelector("#search")

// form.addEventListener()
if (localStorage.getItem('recentMovieSearches') !== null) {
    storageArray = JSON.parse(localStorage.getItem('recentMovieSearches'))
}
// storageArray = localStorage.getItem('recentMovieSearches')

function handleForm(event) {
    event.preventDefault()

    storageArray.push(searchBar.value)
    localStorage.setItem('recentMovieSearches', JSON.stringify(storageArray));

}
form.addEventListener('submit', handleForm)



//given a card title, and body text, renders the result into the results container
const renderMovieCard = (title, bodyText) => {
   let cardEl = document.createElement('div')
   let titleEl = document.createElement('h3')
   let descriptionEl = document.createElement('p')
   console.log(titleEl)

   titleEl.textContent =title
   descriptionEl.textContent =bodyText

   cardEl.append(title)
   cardEl.append(descriptionEl)
   
   document.querySelector('#results-container').append(cardEl)

}

renderMovieCard('The Matrix', 'lorem ipsum')

