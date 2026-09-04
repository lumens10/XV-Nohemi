const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progressContainer = document.getElementById("progressContainer");
const progress = document.getElementById("progress");

playBtn.addEventListener("click", function () {

  if (audio.paused) {
    audio.play()
      .then(() => {
        playBtn.textContent = "❚❚";
      })
      .catch((error) => {
        console.error("No se pudo reproducir:", error);
      });

  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }

});

audio.addEventListener("timeupdate", function () {

  if (!isNaN(audio.duration)) {
    const porcentaje =
      (audio.currentTime / audio.duration) * 100;

    progress.style.width = porcentaje + "%";
  }

});

progressContainer.addEventListener("click", function (event) {

  if (!isNaN(audio.duration)) {

    const ancho = progressContainer.clientWidth;
    const posicion = event.offsetX;

    audio.currentTime =
      (posicion / ancho) * audio.duration;
  }

});

audio.addEventListener("ended", function () {
  playBtn.textContent = "▶";
  progress.style.width = "0%";
});
