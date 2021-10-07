document.addEventListener('keydown', (event) => {
    console.log(event)
    console.log(event.key)
    searchKeyboardToolTip.hide();
    clearInterval(keyboardTip)
    if (`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`.includes(event.key) && document.activeElement != search) {
        search.scrollIntoView({ behavior: 'smooth' });
        search.focus();
        searchKeyboardToolTip.hide();
        // console.log(search.value)
        // search.value = search.value.concat(event.key)
    }
});

//creates a tooltip that only appears on the first visit to the site
let searchKeyboardToolTip = tippy(document.querySelector('form'), {
    content: `<h2 class='text-indigo-400 text-2xl border-b border-solid border-indigo-300 mb-2'>Type Anywhere ⌨</h2><p class='text-indigo-400 text-xl'>Just start typing <span class='font-semibold'>anywhere</span> on the page and we'll start your search! Try: <span class='font-semibold'>'matrix'</span> or <span class='font-semibold'>'star wars'</span></p>`,
    allowHTML: true,
    // trigger for testing/styling
    // trigger: 'click',
    trigger: 'manual',
    theme: 'dark-tip',
    maxWidth: 500,
    placement: 'top',
    arrow: false,
    animation: 'shift-away-extreme',
    inertia: true,
});

let userStatus = { 
    firstTime : !localStorage.getItem('firstTime')? true : false,
}
let keyboardTip;
if(userStatus.firstTime){
    keyboardTip = setTimeout(() => {
    searchKeyboardToolTip.show();
    localStorage.setItem('firstTime', false)
}, 750);
}