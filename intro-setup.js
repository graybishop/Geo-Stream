let intro = introJs().setOptions({
    steps: [{
        title: `Welcome to the site!🎉`,
        intro: `Here you can find where to watch your favorite movie, tv series, mini-series, docu-dramas, and soap operas.`
    },
    {
        intro: `Let's walk through some of our features.`
    },
    {
        element: document.querySelector('form'),
        intro: `Here's the <span class='font-semibold'>search bar.</span> Start typing in the name of your favorite piece of digital media. We're partial to nature documentaries. 🦈`
    },
    {
        element: document.querySelector('.genres'),
        intro: `Here's our <span class='font-semibold'>Most Popular</span> section. We pull these posters live from <a class='font-semibold' href='https://www.imdb.com/'>IMDB's</a> top lists 🍿. If your having trouble picking a show <i>(again)</i> while eating dinner alone <i>(again)</i> on the couch <i>(again),</i> here's a bunch of great suggestions to get you started.`,
        position: `bottom-right-aligned`
    },
    {
        element: document.querySelector('#results-container'),
        intro: `After you search for your next binge watch, or click on one of our suggestions, your search results will pop down here.`
    },
    {
        element: document.querySelector('#results-container'),
        intro: `Each card contains the title, year of release, short description, and where you can stream.`
    },
    {
        element: document.querySelector('#results-container'),
        intro: `Each card contains the title, year of release, short description, and where you can stream.`
    },


    ]
})





intro.start()
