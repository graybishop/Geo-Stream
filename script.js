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


