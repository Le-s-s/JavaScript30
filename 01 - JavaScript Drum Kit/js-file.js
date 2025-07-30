window.addEventListener('keydown', function(e) {
    
    // gets box and audio of a matching key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);

    if(!audio) return; // if no associated code return

    // resets audio time on press so you can spam
    audio.currentTime = 0;
    audio.play();
    box.classList.add('played');

    // when animation ends remove class
    box.addEventListener("transitionend", (event) => {

      box.classList.remove('played');

    });
});
