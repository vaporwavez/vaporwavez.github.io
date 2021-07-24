const style = document.createElement('style');

document.head.appendChild(style);
var music = document.getElementById('vaporwave');
var play = document.getElementById('play');
//volume manipulation
var userVolume = document.getElementById('volume');
userVolume.addEventListener('input', function() {
  music.volume = userVolume.value;
} );
//play and pause music
play.onclick = function() {
  if (music.paused) {
    music.play();
    play.src = 'image/pause.png';
  } else {
    music.pause();
    play.src = 'image/play.png';
  }
};
music.onended = function() {
  play.src = 'image/play.png';
}
music.onplay = function() {
  play.src = 'image/pause.png'
}
//stop music
var stop = document.getElementById('stop');
stop.onclick = function() {
  music.pause();
  music.currentTime = 0;
  play.src = 'image/play.png';
}
//navbar hide and show items
var navItems = document.getElementById('nav-items')
var selectMusic = document.getElementById('resize-start')
selectMusic.addEventListener('click', navbar);
function navbar() {
  if (navItems.style.display=='none') {
  navItems.style.display='block';
} else {
  navItems.style.display='none';
  }
}
// applies and takes away filter
var filtered = document.getElementById('filtered');
function filterSwitch() {
  if (filtered.style.display=='none') {
    filtered.style.display='block';
} else {
  filtered.style.display='none';
  }
}
//declare buttons
var vaporwaveSelect = document.getElementById('vaporwaveSelect');
var lofiSelect = document.getElementById('lofiSelect');
var trapSelect = document.getElementById('trapSelect');
var background = document.getElementById('marginal-background');
//declare Title
var title = document.getElementById('title');

vaporwaveSelect.addEventListener('click', function() {
  background.style.backgroundRepeat = 'repeat';
  music.pause();
  music.src = 'music/vaporwave.mp3'
  navItems.style.display='none';
  play.src = 'image/play.png';
  background.style.backgroundImage = 'url("image/wave.png")';
  title.src = 'image/title.png';

});
lofiSelect.addEventListener('click', function() {
  music.pause();
  music.src = 'music/lofi.mp3';
  navItems.style.display='none';
  play.src = 'image/play.png';
  background.style.backgroundRepeat = 'repeat';
  background.style.backgroundImage = 'url("image/lofi.jpg")';
  title.src = 'image/title.png';

});
trapSelect.addEventListener('click', function() {
  music.pause();
  music.src = 'music/trap.mp3';
  navItems.style.display='none';
  play.src = 'image/play.png';
  background.style.backgroundImage = 'url("image/boom.jpg")';
  background.style.backgroundRepeat = 'repeat';
  title.src = 'image/title.png';
});
