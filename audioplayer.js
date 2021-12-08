const WaveSurfer = window.WaveSurfer;

console.log('connected')

// TO DO create an array of track objects



let audioPlayer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: 'grey',
    barWidth: '2',
    barGap:'3',
    cursorColor: 'blue',
    height: '100'

});

audioPlayer.load('audio/affirmative reaction.mp3');

// wavesurfer.on('ready', function () {
//     audioPlayer.play();
// });

const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');

playBtn.addEventListener('click', () => {
    audioPlayer.playPause();

    if (audioPlayer.isPlaying()) {
        playBtn.classList.add("playing");
    } else {
        playBtn.classList.remove("playing");
    }
})

stopBtn.addEventListener('click', () => {
    audioPlayer.stop();

});