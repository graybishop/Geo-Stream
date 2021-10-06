//dirty way to make origional suggestions. might want to drop entirely in favor of waiting on api results
let fullCatalog = imdb250Movies.items.concat(imdb250TV.items);

//global for tracking keypresses 
let timeoutID;

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
  resultItem: {
    highlight: true
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        if (selection.title != undefined) {
          autoCompleteJS.input.value = selection.title;
        } else {
          //needed because omdb uses capital property names
          autoCompleteJS.input.value = selection.Title;
        }

      },
      focus: () => {
        if (autoCompleteJS.input.value.length) autoCompleteJS.start();
      },
      keyup: () => {
        //I don't think this if statement is needed (the executed code is the same regardless of the condition.)
        if (!timeoutID) {
          timeoutID = setTimeout(() => {
            console.log(`times up`);
          }, 3000);
        } else {
          clearTimeout(timeoutID);
          timeoutID = setTimeout(() => {
            if (checkInputSize(autoCompleteJS.input.value.trim())) {
              console.log(`we are go an API call is runing`);
              goFindSomeResults(autoCompleteJS.input.value.trim());
            }
          }, 3000);
        }

      }
    }
  },
  resultsList: {
    // add styling to the list of suggestions
    class: 'bg-white text-lg text-gray-900 rounded-lg py-4 px-4 space-y-2 absolute',
    maxResults: 10,
  },
  threshold: 3
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
      console.log(data.Search);
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
  }
  autoCompleteJS.start();
};