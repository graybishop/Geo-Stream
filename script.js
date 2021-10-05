
let storageArray = []




let form = document.querySelector("#form")
let searchBar = document.querySelector("#search")

// form.addEventListener()
if (localStorage.getItem('recentMovieSearches') !== null) {
    storageArray = JSON.parse(localStorage.getItem('recentMovieSearches'))
}


function handleForm(event) {
    event.preventDefault()

    storageArray.push(searchBar.value)
    localStorage.setItem('recentMovieSearches', JSON.stringify(storageArray));
makeRecentSearches()
}
form.addEventListener('submit', handleForm)

let searches = document.querySelector('#recent-searches');
console.log(searches)
function makeRecentSearches(){
    searches.innerHTML = ""
    storageArray.forEach((item)=>{
        let li = document.createElement("li");
        li.innerHTML = item;
        searches.append(li);
      }) 
}

makeRecentSearches()



//given a card title, and body text, renders the result into the results container
const renderMovieCard = (title, bodyText) => {
   let cardEl = document.createElement('div')
   let titleEl = document.createElement('h3')
   let descriptionEl = document.createElement('p')
   
   titleEl.textContent = title
   descriptionEl.textContent =bodyText

   cardEl.append(titleEl)
   cardEl.append(descriptionEl)
   
   document.querySelector('#results-container').append(cardEl)

}

renderMovieCard('The Matrix', 'lorem ipsum')

