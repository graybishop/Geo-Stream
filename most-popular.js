let popSectionEl = document.querySelector('#popular-items')

/* disabled so we don't spam the API
fetch('https://imdb-api.com/en/API/MostPopularTVs/k_cz0bokv0')
.then(response => response.json())
.then(payload => updatePopSection(payload))
*/

//takes the items object from the payload and displays posters based on it. 
const updatePopSection = ({items}) => {
    //limits it to the top five shows
    let tvShows = items.slice(0,5)

    //runs through each
    tvShows.forEach(element => {
        //creates a card div to hold the element and to assign it data. 
        let cardEl = document.createElement('div')
        cardEl.classList = ' text-gray-900 rounded h-52 shadow'
        cardEl.dataset.title = element.title

        let posterEl = document.createElement('img')
        posterEl.classList.add('rounded', 'object-center', 'object-cover', 'h-full')
        posterEl.dataset.title = element.title
        
        posterEl.setAttribute('src', element.image)

        cardEl.append(posterEl)
        popSectionEl.append(cardEl)
    });
}



const searchPoster = (event) => {
    let title = event.target.dataset.title
    if(title){
        getMovieIdPosters(title)
    }

}

popSectionEl.addEventListener('click', searchPoster)

let placeHolderPopArr = {items: [
    {
        "id": "tt10919420",
        "rank": "1",
        "rankUpDown": "+1",
        "title": "Squid Game",
        "fullTitle": "Squid Game (2021)",
        "year": "2021",
        "image": "https://imdb-api.com/images/original/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6716_AL_.jpg",
        "crew": "Jung-jae Lee, Greg Chun",
        "imDbRating": "8.3",
        "imDbRatingCount": "85647"
    },
    {
        "id": "tt10574558",
        "rank": "2",
        "rankUpDown": "+6",
        "title": "Midnight Mass",
        "fullTitle": "Midnight Mass (2021)",
        "year": "2021",
        "image": "https://imdb-api.com/images/original/MV5BNWVmZWQ5ZmItZjc2OC00MTFhLWI4OTEtNWY3MDg0OWY3YTJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        "crew": "Kate Siegel, Zach Gilford",
        "imDbRating": "7.8",
        "imDbRatingCount": "28463"
    },
    {
        "id": "tt7767422",
        "rank": "3",
        "rankUpDown": "-2",
        "title": "Sex Education",
        "fullTitle": "Sex Education (2019)",
        "year": "2019",
        "image": "https://imdb-api.com/images/original/MV5BODhmN2Q4ZjUtNzE5Ni00YWQxLThmYjYtM2NkNDEwNmFhMGY3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        "crew": "Asa Butterfield, Gillian Anderson",
        "imDbRating": "8.3",
        "imDbRatingCount": "210387"
    },
    {
        "id": "tt10986410",
        "rank": "4",
        "rankUpDown": "-1",
        "title": "Ted Lasso",
        "fullTitle": "Ted Lasso (2020)",
        "year": "2020",
        "image": "https://imdb-api.com/images/original/MV5BMDVmODUzNmEtMGMxZC00NWUzLTkxMTAtMDM5OTQzMWE0ZDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
        "crew": "Jason Sudeikis, Brett Goldstein",
        "imDbRating": "8.8",
        "imDbRatingCount": "104405"
    },
    {
        "id": "tt0804484",
        "rank": "5",
        "rankUpDown": "+4",
        "title": "Foundation",
        "fullTitle": "Foundation (2021)",
        "year": "2021",
        "image": "https://imdb-api.com/images/original/MV5BMTE5MDY1MGUtMmMxNi00YjA3LWIyZTYtN2FhOWJmNTY2NmM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        "crew": "Lee Pace, Lou Llobell",
        "imDbRating": "7.5",
        "imDbRatingCount": "10892"
    }
]

}

updatePopSection(placeHolderPopArr)