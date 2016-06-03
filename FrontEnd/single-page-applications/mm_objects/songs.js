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
var listAddSongs = document.getElementById('list-add-songs');

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
  listAddSongs.innerHTML = ''
  for (var i = 0; i < songObjects.length; i++){
    var song = songObjects[i];
    listAddSongs.innerHTML += '<div class="song"><h3>' + song.title
    + '</h3><div>Artist: ' + song.artist + '</div>'
    + '<div>Album: ' + song.album + '</div>'
    + '<div>Genre: ' + song.genre + '</div>'
    + '</div>'
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
  populateSongs();
})
