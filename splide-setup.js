let gallery = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    autoWidth: true,
    autoplay: true,
    interval: 500,
    speed: 1000,
    gap: '1.25rem',
    arrows: true,
    pagination: false,
    start: 0,
} )



document.addEventListener( 'DOMContentLoaded', function() {
    gallery.mount();
    document.querySelector('.splide').classList.add('scale-x-100')
    document.querySelector('.splide').classList.remove('scale-x-0')
    const { track } = gallery.Components.Elements;
    gallery.Components.Style.ruleBy( track, 'overflow', 'visible');
} );
