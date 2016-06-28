var songObjects =
[
  {'title': 'Dogs', 'artist': 'Pink Floyd', 'album': 'Animals', 'genre': 'Rock'},
  {'title': 'Fields Of Gold', 'artist': 'Sting', 'album': 'Ten Summoner\'s Tales', 'genre': 'Rock'},
  {'title': 'Perpetual Change', 'artist': 'Yes', 'album': 'The Yes album', 'genre': 'Progressive'},
  {'title': 'Signify', 'artist': 'Porcupine Tree', 'album': 'Signify', 'genre': 'Progressive'},
  {'title': 'Feather', 'artist': 'Nujabes', 'album': 'Modal Soul', 'genre': 'Nu Jazz'},
  {'title': 'Immigrant Song', 'artist': 'Led Zeppelin', 'album': 'Led Zeppelin III', 'genre': 'Rock'},
  {'title': 'Tomorrow Never Knows', 'artist': 'The Beatles', 'album': 'Revolver', 'genre': 'Rock'},
  {'title': 'New Slang', 'artist': 'The Shins', 'album': 'Oh, Inverted World', 'genre': 'Rock'},
  {'title': 'Over Now', 'artist': 'Alice In Chains', 'album': 'Alice In Chains', 'genre': 'Rock'},
  {'title': 'Sledgehammer', 'artist': 'Peter Gabriel', 'album': 'So!', 'genre': 'Rock'}
]

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
var addGenre = document.getElementById('add-genre');
var listAddSongObjects = document.getElementById('list-add-song-objects');
var listAddSongs = document.getElementById('list-add-songs');
var listAddArtists = document.getElementById('list-add-artists');
var listAddAlbums = document.getElementById('list-add-albums');
var listAddGenres = document.getElementById('list-add-genres');

function success(data, str) {
  populateSongs(JSON.parse(data).songs, str);
}

function fail(){
  console.log('XHR call failed')
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", function(){
  success(this.responseText, 'first');
});
myRequest.addEventListener("error", fail);
myRequest.open("GET", "songs1.json");
myRequest.send();


function populateSongs(songs, str){
  switch(str){
    case 'first':
    output.innerHTML = '';
    for (var i = 0; i < songs.length; i++){
      newSongs.push(songs[i]);
      output.innerHTML += "<div class='song'>" + songs[i].title + " by "
      + songs[i].artist + " on the album, " + songs[i].album
      + "<input type='button' class='delBtn' value='Delete'>"
      + "</div>"
    }
    output.innerHTML += "<div id='more'></div>"
      + "<input type='button' id='moreBtn' value='More'>";
    loadDynamicEvents();
    break;
  case 'second':
    var more = document.getElementById('more');
    var moreBtn = document.getElementById('moreBtn');
    more.innerHTML = '';
    for (var i = 0; i < songs.length; i++){
      newSongs.push(songs[i]);
      more.innerHTML += "<div class='song'>" + songs[i].title + " by "
      + songs[i].artist + " on the album, " + songs[i].album
      + "<input type='button' class='delBtn' value='Delete'>"
      + "</div>"
    }
    moreBtn.setAttribute('disabled', 'disabled')
    loadDynamicEvents();
    break;
  }
}

function getMoreSongs(){
  var moreRequest = new XMLHttpRequest();
  moreRequest.addEventListener("load", function(){
    success(this.responseText, 'second')
  });
  moreRequest.addEventListener("error", fail);
  moreRequest.open("GET", "songs2.json");
  moreRequest.send();
}

function loadDynamicEvents(){
  var songs = document.getElementsByClassName('song');
  var moreBtn = document.getElementById('moreBtn');
  for (var i = 0; i < songs.length; i++){
    songs[i].addEventListener('click', function(e){
      e.currentTarget.remove();
    })
  }
  moreBtn.addEventListener('click', function(e){
    getMoreSongs();
  });
}

function listSongs(){
  listAddSongObjects.innerHTML = '<h2>Songs</h2>';
  var outputArr;
  var oneTwoArr = [];
  var threeFourArr = [];
  for (var i =0; i < songObjects.length; i++){
    var currentSong = songObjects[i].title;
    var currentSongCount = songObjects[i].title.split(' ').length
    if (currentSongCount === 1){
      oneTwoArr.unshift(currentSong);
    } else if (currentSongCount === 2){
      oneTwoArr.push(currentSong);
    } else if (currentSongCount === 3){
      threeFourArr.unshift(currentSong);
    } else {
      threeFourArr.push(currentSong);
    }
  }
  outputArr = oneTwoArr.concat(threeFourArr);
  for (var i = 0; i < outputArr.length; i++){
    listAddSongObjects.innerHTML += '<p>' + outputArr[i] + '</p>'
  }
}

function listArtists(){
  listAddSongObjects.innerHTML += '<h2>Artists</h2>';
  var artistArr =[];
  for (var i = 0; i < songObjects.length; i++){
    var currentArtist = songObjects[i].artist;
    artistArr.push(currentArtist);
  }
  var orderedArtists = artistArr.sort(alphabetize)
  console.log(orderedArtists);
  for (var i = 0; i < orderedArtists.length; i++){
    listAddSongObjects.innerHTML += '<p>' + orderedArtists[i] + '</p>';
  }
}

function alphabetize(a, b){
  var artistOne = a.toLowerCase();
  var artistTwo = b.toLowerCase();

  artistOne = considerThe(artistOne);
  artistTwo = considerThe(artistTwo);

  if (artistOne > artistTwo){
    return 1;
  } else if (artistOne < artistTwo){
    return -1;
  } else {
    return 0;
  }
}

function considerThe(artist){
  words = artist.split(' ');
  if (words.length <= 1){
    return artist
  } else if (words[0] == 'the'){
    return words.splice(1).join(' ');
  } else {
    return artist;
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
  var newSong =
    {
      "title": addSong.value,
      "artist": addArtist.value,
      "album": addAlbum.value,
      "genre": addGenre.value
    }
  songObjects.push(newSong);
  addSong.value = '';
  addAlbum.value = '';
  addArtist.value = '';
  addGenre.value = '';
  listSongs();
  listArtists();
  populateSongs();
})
