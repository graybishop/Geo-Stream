let intro = introJs().setOptions({
    steps: [{
        title: `Welcome to the site!🎉`,
        intro: `<p class='mb-2'>Here you can find where to watch your favorite movie, tv-series, mini-series, docu-drama, soap opera, space opera, or historical mockumentary.</p><p>Let's walk through some of our <span class='font-semibold'>features.</span></p>`
    },
    {
        element: document.querySelector('form'),
        intro: `Here's the <span class='font-semibold'>search bar.</span> Start typing in the name of your favorite piece of digital media. We're partial to nature documentaries. 🦈`
    },
    {
        element: document.querySelector('#most-popular'),
        intro: `<p class='mb-2'>Here's our <span class='font-semibold'>Most Popular</span> section. We pull these posters live from <a class='font-semibold' href='https://www.imdb.com/'>IMDB's</a> top lists 🍿. </p><p>If your having trouble picking a show <i>(again)</i> while eating dinner alone <i>(again)</i> on the couch <i>(again),</i> here's a bunch of great <span class='font-semibold'>suggestions to get you started.</span></p>`,
    },
    {
        element: document.querySelector('#results-container'),
        intro: `<p class='mb-2'>After you search for your next binge watch, or click on one of our suggestions, your search results will pop down here.</p><p>Each card contains the <span class='font-semibold'>title, year of release, short description,</span> and <span class='font-semibold'>where you can find it streaming.</span></p>`
    },
    {
        element: document.querySelector('#modal-settings-btn'),
        intro: `In here you can find settings to customize🛠 which services are most relevant to you.`
    },
    {
        title: `Fun's over. 💖`,
        intro: `That's it, you've made it to the end. Start Browsing.`
    },
    ]
})

userStatus.firstTime? intro.start() : document.querySelector("#results-container").innerHTML =''

intro.onexit(()=>{
    document.querySelector("#results-container").innerHTML =''
    searchKeyboardToolTip.show()
})