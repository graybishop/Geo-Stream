document.addEventListener('keydown', (event) => {
    if (`abcdefghijklmnopqrstuvwxyz`.includes(event.key) && document.activeElement != search) {
        search.scrollIntoView({behavior: 'smooth'})
        search.focus()
        // console.log(search.value)
        // search.value = search.value.concat(event.key)
    }
})