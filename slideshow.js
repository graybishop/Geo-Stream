function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("imgS").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 4000);
}

var images = [], x = 0;
images[0] = "imgs/zilla.webp";
images[1] = "imgs/star.jpg";
images[2] = "imgs/indy2.jpg";
images[3] = "imgs/startrek24.jpg"
images[4] = "imgs/goonies.jpg"
images[5] = "imgs/5452589.jpg"
startTimer()