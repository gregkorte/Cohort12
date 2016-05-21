var songs = ['Dogs', 'Sheep', 'Perpetual Change', 'Signify', 'Feather', 'Immigrant Song', 'Tomorrow Never Knows', 'New Slang', 'Over Now', 'Any Colour You Like';
var artists = ['Pink Floyd', 'Yes', 'Porcupine Tree', 'Nujabes', 'Led Zeppelin', 'The Beatles', 'The Shins', 'Alice In Chains'];
var albums = ['Animals', 'The Yes Album', 'Signify', 'Modal Soul', 'Led Zeppelin III', 'Revolver', 'Oh, Inverted World', 'Alice In Chains', 'Dark Side of the Moon'];
var genres = ['Rock', 'Progressive Rock', 'Nu Jazz'];
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



function populateSongs(){

}

function populateArtists(){

}

function populateAlbums(){

}

function populateGenres(){

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
