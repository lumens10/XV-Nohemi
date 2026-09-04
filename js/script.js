const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progressContainer = document.getElementById("progressContainer");
const progress = document.getElementById("progress");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "❚❚";
  } else {
    audio.pause();
    playBtn.innerHTML = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
  }
});

progressContainer.addEventListener("click", (event) => {
  const width = progressContainer.clientWidth;
  const clickX = event.offsetX;

  if (audio.duration) {
    audio.currentTime = (clickX / width) * audio.duration;
  }
});

audio.addEventListener("ended", () => {
  playBtn.innerHTML = "▶";
  progress.style.width = "0%";
});
