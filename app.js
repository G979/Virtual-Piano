document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        var audio = new Audio('soundEffects/A.mp3');
        audio.play();
    }
    else if(event.code == "KeyS") {
        var audio = new Audio('soundEffects/S.mp3');
        audio.play();
    }
    else if(event.code == "KeyD") {
        var audio = new Audio('soundEffects/D.mp3');
        audio.play();
    }
    else if(event.code == "KeyF") {
        var audio = new Audio('soundEffects/F.mp3');
        audio.play();
    }
    else if(event.code == "KeyG") {
        var audio = new Audio('soundEffects/G.mp3');
        audio.play();
    }
    else if(event.code == "KeyH") {
        var audio = new Audio('soundEffects/H.mp3');
        audio.play();
    }
    else if(event.code == "KeyJ") {
        var audio = new Audio('soundEffects/J.mp3');
        audio.play();
    }
    else if(event.code == "KeyW") {
        var audio = new Audio('soundEffects/W.mp3');
        audio.play();
    }
    else if(event.code == "KeyE") {
        var audio = new Audio('soundEffects/E.mp3');
        audio.play();
    }
    else if(event.code == "KeyT") {
        var audio = new Audio('soundEffects/T.mp3');
        audio.play();
    }
    else if(event.code == "KeyY") {
        var audio = new Audio('soundEffects/Y.mp3');
        audio.play();
    }
    else if(event.code == "KeyU") {
        var audio = new Audio('soundEffects/U.mp3');
        audio.play();
    }
    else {
        alert("Wrong key");
    }
});
