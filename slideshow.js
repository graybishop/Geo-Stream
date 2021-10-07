function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("imgS").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 4000);
}

var images = [], x = -1;
images[0] = "zilla.webp";
images[1] = "star.jpg";
images[2] = "indy2.jpg";
images[3] = "startrek24.jpg"
images[4] = "goonies.jpg"
images[5] = "5452589.jpg"
startTimer()