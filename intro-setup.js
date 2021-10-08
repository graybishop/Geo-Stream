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
});

if (userStatus.firstTime) {
    intro.start();
    console.log(savedMovieCards);
    renderMovieCard({
        title: "The Matrix",
        year: "1999",
        plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        services: [
            { name: "Netflix", url: "netflix.com", logo: "https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg"},
            { name: "Hulu", url: "Hulu.com", logo: "https://image.tmdb.org/t/p/original/giwM8XX4V2AQb9vsoN7yti82tKK.jpg"},
            { name: "HBO Now", url: HBOMaxUrl, logo: "https://image.tmdb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg"},
        ],
    });

    renderMovieCard({
        title: "The Matrix Reloaded",
        year: "2003",
        plot: "Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.",
        services: [
            { name: "Netflix", url: "netflix.com", logo: "https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg"},
            { name: "Hulu", url: "Hulu.com", logo: "https://image.tmdb.org/t/p/original/giwM8XX4V2AQb9vsoN7yti82tKK.jpg"},
            { name: "HBO Now", url: HBONowUrl, logo: "https://image.tmdb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg"},
        ],
    });

    renderMovieCard({
        title: "The Matrix Revolutions",
        year: "2003",
        plot: "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
        services: [
            { name: "Netflix", url: "netflix.com", logo: "https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg" },
            { name: "Hulu", url: "Hulu.com", logo: "https://image.tmdb.org/t/p/original/giwM8XX4V2AQb9vsoN7yti82tKK.jpg"},
            { name: "HBO Now", url: HBONowUrl, logo: "https://image.tmdb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg"},
        ],
    });

    savedMovieCards = [];
    localStorage.setItem('movieCards', JSON.stringify([]));
} else {
    document.querySelector("#results-container").innerHTML = '';
    let tempMovieStorage = savedMovieCards;
    savedMovieCards[0] ? savedMovieCards.forEach(element => {
        renderMovieCard(element);
        savedMovieCards.pop();
    }) : null;
    localStorage.setItem('movieCards', JSON.stringify(tempMovieStorage));
}



intro.onexit(() => {
    document.querySelector("#results-container").innerHTML = '';
    searchKeyboardToolTip.show();
    localStorage.setItem('movieCards', JSON.stringify([]));
});