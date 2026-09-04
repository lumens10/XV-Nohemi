const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

console.log("Audio encontrado:", audio);
console.log("Fuente del audio:", audio.currentSrc);
console.log("URL del audio:", audio.src);

playBtn.addEventListener("click", function () {

  console.log("Botón presionado");
  console.log("Estado:", audio.readyState);
  console.log("Fuente:", audio.currentSrc);
  console.log("Duración:", audio.duration);

  audio.play()
    .then(() => {
      console.log("¡REPRODUCCIÓN INICIADA!");
      playBtn.textContent = "❚❚";
    })
    .catch((error) => {
      console.error("ERROR DE AUDIO:", error);
    });

});
