let intro = introJs().setOptions({
    steps: [{
        title: `Welcome to the site!🎉`,
        intro: `Here you can find where to watch your favorite movie, tv series, mini-series, docu-dramas, and soap operas.`
    },
    {
        intro: `Let's walk through some of our features.`
    },
    {
        element: document.querySelector('#search'),
        intro: `Here's the <span class='font-semibold'>search bar.</span> Start typing in the name of your favorite piece of digital media. We're partial to nature documentaries. 🦈`
    },
    {
        element: document.querySelector('#search'),
        intro: `Here's the <span class='font-semibold'>search bar.</span> Start typing in the name of your favorite piece of digital media. We're partial to nature documentaries. 🦈`
    },

    ]
})





intro.start()
