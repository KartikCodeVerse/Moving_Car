var audio = document.createElement("audio");
var car = document.getElementById("car");
var trees = document.getElementById("trees");
var track = document.getElementById("track");
var wheel1 = document.getElementById("wheel1");
var wheel2 = document.getElementById("wheel2");

audio.setAttribute("src", "./Car Aminated/sound.mp3");
var isMuted = false;
audio.loop = true;
document.addEventListener("click", function () {
  if (isMuted) {
    audio.muted = false; // Unmute
    audio.play();

    // Add the CSS class to the element
    car.classList.add("car_anime");
    trees.classList.add("trees_anime");
    track.classList.add("track_anime");
    wheel1.classList.add("wheel1_anime");
    wheel2.classList.add("wheel2_anime");
    isMuted = false;
  } else {
    audio.muted = true; // Mute
    car.classList.remove("car_anime");
    trees.classList.remove("trees_anime");
    track.classList.remove("track_anime");
    wheel1.classList.remove("wheel1_anime");
    wheel2.classList.remove("wheel2_anime");
    isMuted = true;
  }
});
