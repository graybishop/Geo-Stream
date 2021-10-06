//dirty way to make origional suggestions. might want to drop entirely in favor of waiting on api results
let fullCatalog = imdb250Movies.items.concat(imdb250TV.items);

//global for tracking keypresses 
let timeoutID;

// .autoComplete_wrapper > ul > li[aria-selected="true"] {
// background-color: rgba(255, 122, 122, 0.15);
// }

//creates the new autocomplete form
const autoCompleteJS = new autoComplete({
  selector: "#search",
  wrapper: false,
  placeHolder: "Find a Movie",
  submit: true,
  searchEngine: "loose",
  data: {
    src: fullCatalog,
    cache: true,
    keys: ['title']
  },
  //styling for list elements
  resultItem: {
    highlight: true,
    element: (item, data) =>{
      let year = data.value.year ? data.value.year : data.value.Year;
      item.classList = 'flex flex-row justify-between hover:bg-indigo-200 rounded px-1 items-baseline'
      item.innerHTML =`
      <p>${data.match}</p><p class='text-right text-sm text-gray-400'>${year}</p>`
      // console.log(data.value.year)
    }
  },
  //interations and events here
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection.title ? selection.title : selection.Title

        //submits form when a selection is made.
        document.querySelector('#auto-complete-loading-icon').classList.add('opacity-0')
        document.querySelector("#form").requestSubmit()

      },
      focus: () => {
        if (autoCompleteJS.input.value.length) {
          document.querySelector('#auto-complete-loading-icon').classList.remove('opacity-0');
          autoCompleteJS.start()
        };
      },
      keyup: () => {
        //shows and hides the loading icon
        searchNoResultsToolTip.hide()
        if (autoCompleteJS.input.value.length) {
          document.querySelector('#auto-complete-loading-icon').classList.remove('opacity-0');
        } else {
          document.querySelector('#auto-complete-loading-icon').classList.add('opacity-0');
        }

        //I don't think this if statement is needed (the executed code is the same regardless of the condition.)
        if (!timeoutID) {
          timeoutID = setTimeout(() => {
            console.log(`times up`);
          }, 3000);
        } else {
          clearTimeout(timeoutID);
          timeoutID = setTimeout(() => {
            if (checkInputSize(autoCompleteJS.input.value.trim())) {
              goFindSomeResults(autoCompleteJS.input.value.trim());
            }
          }, 3000);
        }

      },
      blur: () => {
        //when the seachbar loses focus close the searchlist and hide the loading icon
        document.querySelector('#auto-complete-loading-icon').classList.add('opacity-0');
        autoCompleteJS.close();
      }
    }
  },
  resultsList: {
    // add styling to the list of suggestions
    class: 'bg-white text-lg text-gray-900 rounded-lg py-4 px-4 space-y-2 absolute',
    maxResults: 10,
    tabSelect: true,
  },
  threshold: 3,
});

//checks that there are enough chars for a search.
const checkInputSize = () => {
  if (autoCompleteJS.input.value.trim().length > 5) {
    return true;
  }
  return false;
};

//api call that drives the results to the updateSuggestions function. i think async and await are not useful here.
const goFindSomeResults = async (searchText) => {

  let url = `https://www.omdbapi.com/?s=${searchText}&apikey=2086f7b1`;
  console.log(`CAUTION: API call to ${url} in progress`);

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      updateSuggestions(data.Search);
    });
};

//updates the suggestions list under the search bar if there are results
const updateSuggestions = (arr) => {
  if (arr) {
    autoCompleteJS.data = {
      src: arr,
      cache: true,
      keys: ['Title']
    };
  } else {
    console.log(`there's nothing we can add to the search suggestions`)
    searchNoResultsToolTip.show()
  }
  autoCompleteJS.start();
};

let searchNoResultsToolTip = tippy(document.querySelector('#search'), {
  content: `<h2 class='text-yellow-400 text-2xl border-b border-solid border-yellow-300 mb-2'>No Search Results</h2><p class='text-yellow-400 text-xl'>We can't find anything that matches your search 😞. Try again with a <span class='font-semibold'>new term.</span></p>`,
  allowHTML: true,
  // trigger for testing/styling
  // trigger: 'click',
  trigger: 'manual',
  theme: 'dark-warning',
  maxWidth: 400,
  placement: 'top-start',
  arrow: false,
  animation: 'shift-away-extreme',
  inertia: true,
})

const sampleDatadotSearch = [
  {
      "Title": "Red Rum",
      "Year": "2000",
      "imdbID": "tt0237643",
      "Type": "movie",
      "Poster": "N/A"
  },
  {
      "Title": "The Red Rum Diaries",
      "Year": "2016",
      "imdbID": "tt7283336",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2Q3OTM5YmUtZmI1OS00Y2I0LTg2NmQtNWFiOTY3OWRmYmYyXkEyXkFqcGdeQXVyOTM2ODgzNw@@._V1_SX300.jpg"
  }
]