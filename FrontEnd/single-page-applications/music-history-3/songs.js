var songs = [];
var newSongs = [];
var output = document.getElementById('songOutput');
var addMusicLink = document.getElementById('add-music-view-link');
var listMusicLink = document.getElementById('list-music-view-link');
var addMusicView = document.getElementById('add-music-view');
var listMusicView = document.getElementById('list-music-view');
var addSongBtn = document.getElementById('add-song-btn');
var addSong = document.getElementById('add-song');
var addArtist = document.getElementById('add-artist');
var addAlbum = document.getElementById('add-album');

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Perpetual Change > by Yes on the album The Yes Album");
songs.unshift("Sheep > by Pink Floyd on the album Animals");

function populateSongs(){
  output.innerHTML = '';
  for (var i = 0; i < songs.length; i++){
    var newSong = songs[i].replace(/[(*@!]/g, '').replace('>', '-');
    newSongs.push(newSong);
    output.innerHTML += "<div>" + newSong; + "</div>";
  }
}

addMusicLink.addEventListener('click', function(){
  addMusicView.classList.remove('hidden');
  listMusicView.classList.add('hidden');
})

listMusicLink.addEventListener('click', function(){
  addMusicView.classList.add('hidden');
  listMusicView.classList.remove('hidden');
})

addSongBtn.addEventListener('click', function(){
  songString = addSong.value + " - " + "by " + addArtist.value + " on the album " + addAlbum.value;
  songs.push(songString);
  addSong.value = '';
  addAlbum.value = '';
  addArtist.value = '';
  populateSongs();
})

populateSongs();
