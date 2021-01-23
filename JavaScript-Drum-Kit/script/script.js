function playSound(e) {
    if (e.key === "AudioVolumeMute" || e.key === "AudioVolumeUp" || e.key === "AudioVolumeDown" || e.key === "Alt" || e.key === "Shift") return;
    const code = e.key.toUpperCase().charCodeAt(0);

    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`div[data-key="${code}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    key.classList.add("playing");
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function removePlaying(e) {
    const code = e.key.toUpperCase().charCodeAt(0);
    const key = document.querySelector(`div[data-key="${code}"]`);
    if (key !== null) {
        key.classList.remove("playing");
    }
}

const keys = Array.from(document.querySelectorAll(".keys"));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removePlaying);


