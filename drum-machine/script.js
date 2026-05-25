const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playAudio(audioElement, parentId) {
  if (!audioElement) return;

  audioElement.currentTime = 0;
  audioElement.play();

  const displayName = parentId.replace(/-/g, " ");

  display.textContent = displayName;
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");

    playAudio(audio, pad.id);
  });
});

document.addEventListener("keydown", (event) => {
  const keyStr = event.key.toUpperCase();
  const audio = document.getElementById(keyStr);

  if (audio) {
    const parentId = audio.parentElement;

    playAudio(audio, parentId.id);
  }
});
