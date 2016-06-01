var songList = ['Dogs', 'Fields of Gold', 'Perpetual Change', 'Signify', 'Feather', 'Immigrant Song', 'Tomorrow Never Knows', 'New Slang', 'Over Now', 'Sledgehammer'];
var artistList = ['Pink Floyd', 'Sting', 'Yes', 'Porcupine Tree', 'Nujabes', 'Led Zeppelin', 'The Beatles', 'The Shins', 'Alice In Chains', 'Peter Gabriel'];
var albumList = ['Animals', 'Ten Summoner\'s Tales', 'The Yes Album', 'Signify', 'Modal Soul', 'Led Zeppelin III', 'Revolver', 'Oh, Inverted World', 'Alice In Chains', 'So!'];

// var songs = [];
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
var listAddSongs = document.getElementById('list-add-songs');
var listAddArtists = document.getElementById('list-add-artists');
var listAddAlbums = document.getElementById('list-add-albums');

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.push("Perpetual Change > by Yes on the album The Yes Album");
// songs.unshift("Sheep > by Pink Floyd on the album Animals");

function executeThisCodeAfterFileIsLoaded () {
  // A bit more about what `this` is here. What is the execution context?
  console.log(this.responseText);

  // Show usage of JSON.parse() here to get a POJO
  populateSongs(JSON.parse(this.responseText).songs);
}

function executeThisCodeIfXHRFails(){
  console.log('XHR call failed')
}

// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "songs1.json");

// Tell the XHR object to start
myRequest.send();


function populateSongs(songs){
  console.log(songs)
  output.innerHTML = '';
  for (var i = 0; i < songs.length; i++){
    newSongs.push(songs[i]);
    output.innerHTML += "<div class='song'>" + songs[i].title + " by "
    + songs[i].artist + " on the album, " + songs[i].album
    + "<input type='button' class='del' value='Delete'>"
    + "</div>";
  }
  loadDynamicEvents();
}

function loadDynamicEvents(){
  var songs = document.getElementsByClassName('song');
  for (var i = 0; i < songs.length; i++){
    songs[i].addEventListener('click', function(e){
      e.currentTarget.remove();
    })
  }
}

function listElements(){

  var newSongList = [].concat(songList);
  var newArtistList = [].concat(artistList);
  var newAlbumList = [].concat(albumList);

  console.log(songList);

  var listSongs = '';
  var listArtists = '';
  var listAlbums = '';

//SONGS FOR LOOPS
  listSongs += '<h3>Vertical Added Order:</h3>';
  for (var i = 0; i < newSongList.length; i++){
    listSongs += '<div>' + newSongList[i] + '</div>';
  }

  listSongs += '<h3>Horizontal Added Order:</h3><p>';
  for (var i = 0; i < newSongList.length; i++){
    listSongs += newSongList[i] + ' : '
  }

  listSongs += '</p><h3>Vertical Added Order Inverted:</h3>';
  for (var i = newSongList.length - 1; i >= 0; i--){
    listSongs += '<div>' + newSongList[i] + '</div>';
  }

  listSongs += '<h3>Horizontal Added Order Inverted:</h3><p>';
  for (var i = newSongList.length - 1; i >= 0; i--){
    listSongs += newSongList[i] + ' | ';
  }

  listSongs += '</p><h3>Vertical Alphabetical Ascending:</h3>';
  for (var i = 0; i < newSongList.sort().length; i++){
    listSongs += '<div>' + newSongList[i] + '</div>';
  }

  listSongs += '<h3>Horizontal Alphabetical Ascending:</h3><p>';
  for (var i = 0; i < newSongList.length; i++){
    listSongs += newSongList[i] + ' >> ';
  }

  listSongs += '</p><h3>Vertical Alphabetical Descending:</h3>';
  for (var i = newSongList.length - 1; i >= 0; i--){
    listSongs += '<div>' + newSongList[i] + '</div>';
  }

  listSongs += '<h3>Horizontal Alphabetical Descending:</h3><p>';
  for (var i = newSongList.length - 1; i >= 0; i--){
    listSongs += newSongList[i] + ', ';
  }

//ARTISTS FOR LOOPS
  listArtists += '<h3>Vertical Added Order:</h3>';
  for (var i = 0; i < newArtistList.length; i++){
    listArtists += '<div>' + newArtistList[i] + '</div>';
  }

  listArtists += '<h3>Horizontal Added Order:</h3><p>';
  for (var i = 0; i < newArtistList.length; i++){
    listArtists += newArtistList[i] + ' : '
  }

  listArtists += '</p><h3>Vertical Added Order Inverted:</h3>';
  for (var i = newArtistList.length - 1; i >= 0; i--){
    listArtists += '<div>' + newArtistList[i] + '</div>';
  }

  listArtists += '<h3>Horizontal Added Order Inverted:</h3><p>';
  for (var i = newArtistList.length - 1; i >= 0; i--){
    listArtists += newArtistList[i] + ' | ';
  }

  listArtists += '</p><h3>Vertical Alphabetical Ascending:</h3>';
  for (var i = 0; i < newArtistList.sort().length; i++){
    listArtists += '<div>' + newArtistList[i] + '</div>';
  }

  listArtists += '<h3>Horizontal Alphabetical Ascending:</h3><p>';
  for (var i = 0; i < newArtistList.length; i++){
    listArtists += newArtistList[i] + ' >> ';
  }

  listArtists += '</p><h3>Vertical Alphabetical Descending:</h3>';
  for (var i = newArtistList.length - 1; i >= 0; i--){
    listArtists += '<div>' + newArtistList[i] + '</div>';
  }

  listArtists += '<h3>Horizontal Alphabetical Descending:</h3><p>';
  for (var i = newArtistList.length - 1; i >= 0; i--){
    listArtists += newArtistList[i] + ', ';
  }

//ALBUMS FOR LOOPS
  listAlbums += '<h3>Vertical Added Order:</h3>';
  for (var i = 0; i < newAlbumList.length; i++){
    listAlbums += '<div>' + newAlbumList[i] + '</div>';
  }

  listAlbums += '<h3>Horizontal Added Order:</h3><p>';
  for (var i = 0; i < newAlbumList.length; i++){
    listAlbums += newAlbumList[i] + ' : '
  }

  listAlbums += '</p><h3>Vertical Added Order Inverted:</h3>';
  for (var i = newAlbumList.length - 1; i >= 0; i--){
    listAlbums += '<div>' + newAlbumList[i] + '</div>';
  }

  listAlbums += '<h3>Horizontal Added Order Inverted:</h3><p>';
  for (var i = newAlbumList.length - 1; i >= 0; i--){
    listAlbums += newAlbumList[i] + ' | ';
  }

  listAlbums += '</p><h3>Vertical Alphabetical Ascending:</h3>';
  for (var i = 0; i < newAlbumList.sort().length; i++){
    listAlbums += '<div>' + newAlbumList[i] + '</div>';
  }

  listAlbums += '<h3>Horizontal Alphabetical Ascending:</h3><p>';
  for (var i = 0; i < newAlbumList.length; i++){
    listAlbums += newAlbumList[i] + ' >> ';
  }

  listAlbums += '</p><h3>Vertical Alphabetical Descending:</h3>';
  for (var i = newAlbumList.length - 1; i >= 0; i--){
    listAlbums += '<div>' + newAlbumList[i] + '</div>';
  }

  listAlbums += '<h3>Horizontal Alphabetical Descending:</h3><p>';
  for (var i = newAlbumList.length - 1; i >= 0; i--){
    listAlbums += newAlbumList[i] + ', ';
  }

  listAddSongs.innerHTML = listSongs;
  listAddArtists.innerHTML = listArtists;
  listAddAlbums.innerHTML = listAlbums;
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
  songList.push(addSong.value);
  artistList.unshift(addArtist.value);
  albumList.push(addAlbum.value);
  addSong.value = '';
  addAlbum.value = '';
  addArtist.value = '';
  listElements();
  // populateSongs();
})

// populateSongs();

