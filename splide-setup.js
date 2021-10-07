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
} )



document.addEventListener( 'DOMContentLoaded', function() {
    gallery.mount();
    const { track } = gallery.Components.Elements;
    gallery.Components.Style.ruleBy( track, 'overflow', 'visible');
} );
