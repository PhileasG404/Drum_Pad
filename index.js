document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
        document.getElementById('audio-A').play();
    } else if (e.keyCode == 90) {
        document.getElementById('audio-Z').play();
    } else if (e.keyCode == 69) {
        document.getElementById('audio-E').play();
    } else if (e.keyCode == 82) {
        document.getElementById('audio-R').play();
    } else if (e.keyCode == 84) {
        document.getElementById('audio-T').play();
    } else if (e.keyCode == 89) {
        document.getElementById('audio-Y').play();
    }
    });