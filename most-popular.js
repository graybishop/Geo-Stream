
// disabled so we don't spam the API
// fetch('https://imdb-api.com/en/API/MostPopularTVs/k_cz0bokv0')
// .then(response => response.json())
// .then(payload => updatePopSection(payload))


//takes the items object from the payload and displays posters based on it. 
const updatePopSection = ({items}) => {
    //limits it to the top five shows
    let tvShows = items.slice(0,15)
    //runs through each
    tvShows.forEach(element => {
        //creates a card div to hold the element and to assign it data. 
        let cardEl = document.createElement('div')
        cardEl.classList = ' text-gray-900 rounded h-48 shadow'
        cardEl.dataset.title = element.title

        let posterEl = document.createElement('img')
        posterEl.classList.add('rounded', 'object-center', 'object-cover', 'h-full', 'transition-all' , 'transform', 'hover:scale-125')
        posterEl.dataset.title = element.title
        
        posterEl.setAttribute('src', element.image)

        cardEl.append(posterEl)
        
        let splideLi = document.createElement('li')
        splideLi.classList = 'splide__slide'

        splideLi.append(cardEl)

        document.querySelector('.splide__list').append(splideLi)
    });
}



const searchPoster = (event) => {
    let title = event.target.dataset.title
    if(title){
        getMovieIdPosters(title)
    }

}

document.querySelector('.splide').addEventListener('click', searchPoster)

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

const placeHolderPopArr2 ={items: [ 
    {
        "id": "tt10919420",
        "rank": "1",
        "rankUpDown": "+1",
        "title": "Squid Game",
        "fullTitle": "Squid Game (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Lee Jung-jae, Greg Chun",
        "imDbRating": "8.3",
        "imDbRatingCount": "104685"
    },
    {
        "id": "tt10574558",
        "rank": "2",
        "rankUpDown": "+6",
        "title": "Midnight Mass",
        "fullTitle": "Midnight Mass (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BNWVmZWQ5ZmItZjc2OC00MTFhLWI4OTEtNWY3MDg0OWY3YTJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Kate Siegel, Zach Gilford",
        "imDbRating": "7.8",
        "imDbRatingCount": "32079"
    },
    {
        "id": "tt7767422",
        "rank": "3",
        "rankUpDown": "-2",
        "title": "Sex Education",
        "fullTitle": "Sex Education (2019)",
        "year": "2019",
        "image": "https://m.media-amazon.com/images/M/MV5BODhmN2Q4ZjUtNzE5Ni00YWQxLThmYjYtM2NkNDEwNmFhMGY3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Asa Butterfield, Gillian Anderson",
        "imDbRating": "8.3",
        "imDbRatingCount": "212043"
    },
    {
        "id": "tt10986410",
        "rank": "4",
        "rankUpDown": "-1",
        "title": "Ted Lasso",
        "fullTitle": "Ted Lasso (2020)",
        "year": "2020",
        "image": "https://m.media-amazon.com/images/M/MV5BMDVmODUzNmEtMGMxZC00NWUzLTkxMTAtMDM5OTQzMWE0ZDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jason Sudeikis, Brett Goldstein",
        "imDbRating": "8.8",
        "imDbRatingCount": "105908"
    },
    {
        "id": "tt0804484",
        "rank": "5",
        "rankUpDown": "+4",
        "title": "Foundation",
        "fullTitle": "Foundation (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BMTE5MDY1MGUtMmMxNi00YjA3LWIyZTYtN2FhOWJmNTY2NmM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Lee Pace, Lou Llobell",
        "imDbRating": "7.5",
        "imDbRatingCount": "11582"
    },
    {
        "id": "tt10168312",
        "rank": "6",
        "rankUpDown": "-2",
        "title": "What If...?",
        "fullTitle": "What If...? (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Jeffrey Wright, Terri Douglas",
        "imDbRating": "7.6",
        "imDbRatingCount": "40102"
    },
    {
        "id": "tt1520211",
        "rank": "7",
        "rankUpDown": "-1",
        "title": "The Walking Dead",
        "fullTitle": "The Walking Dead (2010)",
        "year": "2010",
        "image": "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Andrew Lincoln, Norman Reedus",
        "imDbRating": "8.2",
        "imDbRatingCount": "903218"
    },
    {
        "id": "tt0141842",
        "rank": "8",
        "rankUpDown": "+11",
        "title": "The Sopranos",
        "fullTitle": "The Sopranos (1999)",
        "year": "1999",
        "image": "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "James Gandolfini, Lorraine Bracco",
        "imDbRating": "9.2",
        "imDbRatingCount": "336931"
    },
    {
        "id": "tt1844624",
        "rank": "9",
        "rankUpDown": "+1",
        "title": "American Horror Story",
        "fullTitle": "American Horror Story (2011)",
        "year": "2011",
        "image": "https://m.media-amazon.com/images/M/MV5BMWFhOGI5ZmQtNjA1My00NWExLTg1MDktYThkYWI3ZTc4ZDYzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Lady Gaga, Kathy Bates",
        "imDbRating": "8.0",
        "imDbRatingCount": "294458"
    },
    {
        "id": "tt12851524",
        "rank": "10",
        "rankUpDown": "+2",
        "title": "Only Murders in the Building",
        "fullTitle": "Only Murders in the Building (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BODAzZjI5NGItNGNlYS00NWU1LTgwNjUtOGQwNWJiMWQwMDg1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Steve Martin, Martin Short",
        "imDbRating": "8.3",
        "imDbRatingCount": "17619"
    },
    {
        "id": "tt1751634",
        "rank": "11",
        "rankUpDown": "+844",
        "title": "The Sandman",
        "fullTitle": "The Sandman (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BN2NlNDA5NDYtYjNhOS00ZTQ5LWEzZDYtOTE4MjBhY2I4ZDY4XkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UY176_CR6,0,128,176_AL_.jpg",
        "crew": "Vivienne Acheampong, Sanjeev Bhaskar",
        "imDbRating": "",
        "imDbRatingCount": "0"
    },
    {
        "id": "tt8760932",
        "rank": "12",
        "rankUpDown": "-7",
        "title": "Nine Perfect Strangers",
        "fullTitle": "Nine Perfect Strangers (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BYjBkYjgxNTktZjQ0Zi00OGU5LThjOTEtOGUzMDVhNjc2MjU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Nicole Kidman, Melissa McCarthy",
        "imDbRating": "7.1",
        "imDbRatingCount": "24519"
    },
    {
        "id": "tt4052886",
        "rank": "13",
        "rankUpDown": "-6",
        "title": "Lucifer",
        "fullTitle": "Lucifer (2016)",
        "year": "2016",
        "image": "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Tom Ellis, Lauren German",
        "imDbRating": "8.1",
        "imDbRatingCount": "285864"
    },
    {
        "id": "tt11640018",
        "rank": "14",
        "rankUpDown": "+144",
        "title": "La Brea",
        "fullTitle": "La Brea (2021)",
        "year": "2021",
        "image": "https://m.media-amazon.com/images/M/MV5BYTY4MmNjMzktNzY0My00OGU2LTljZWYtZjQxZTQyNDE4ODY2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Natalie Zea, Eoin Macken",
        "imDbRating": "5.1",
        "imDbRatingCount": "1814"
    },
    {
        "id": "tt4574334",
        "rank": "15",
        "rankUpDown": "+44",
        "title": "Stranger Things",
        "fullTitle": "Stranger Things (2016)",
        "year": "2016",
        "image": "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Millie Bobby Brown, Finn Wolfhard",
        "imDbRating": "8.7",
        "imDbRatingCount": "914330"
    }
] }

updatePopSection(placeHolderPopArr2)