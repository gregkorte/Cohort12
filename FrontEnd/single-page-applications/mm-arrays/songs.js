var songList = ['Dogs', 'Fields of Gold', 'Perpetual Change', 'Signify', 'Feather', 'Immigrant Song', 'Tomorrow Never Knows', 'New Slang', 'Over Now', 'Sledgehammer'];
var artistList = ['Pink Floyd', 'Sting', 'Yes', 'Porcupine Tree', 'Nujabes', 'Led Zeppelin', 'The Beatles', 'The Shins', 'Alice In Chains', 'Peter Gabriel'];
var albumList = ['Animals', 'Ten Summoner\'s Tales', 'The Yes Album', 'Signify', 'Modal Soul', 'Led Zeppelin III', 'Revolver', 'Oh, Inverted World', 'Alice In Chains', 'So!'];

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
var listAddSongs = document.getElementById('list-add-songs');
var listAddArtists = document.getElementById('list-add-artists');
var listAddAlbums = document.getElementById('list-add-albums');

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

function listElements(){

  var newSongList = [].concat(songList);
  var newArtistList = [].concat(artistList);
  var newAlbumList = [].concat(albumList);

  var listSongs = '';
  var listArtists = '';
  var listAlbums = '';

  listSongs += '<h3>Vertical Added Order:</h3>';
  listSongs += newSongList.join('<br>');
  listSongs += '<h3>Horizontal Added Order:</h3>';
  listSongs += newSongList.join(' : ');
  listSongs += '<h3>Vertical Added Order Inverted:</h3>';
  listSongs += newSongList.reverse().join('<br>');
  listSongs += '<h3>Horizontal Added Order Inverted:</h3>';
  listSongs += newSongList.join(' | ');
  listSongs += '<h3>Vertical Alphabetical Ascending:</h3>';
  listSongs += newSongList.sort().join('<br>');
  listSongs += '<h3>Horizontal Alphabetical Ascending:</h3>';
  listSongs += newSongList.join(', ');
  listSongs += '<h3>Vertical Alphabetical Descending:</h3>';
  listSongs += newSongList.sort().reverse().join('<br>');
  listSongs += '<h3>Horizontal Alphabetical Descending:</h3>';
  listSongs += newSongList.join(' >> ');

  listArtists += '<h3>Vertical Added Order:</h3>';
  listArtists += newArtistList.join('<br>');
  listArtists += '<h3>Horizontal Added Order:</h3>';
  listArtists += newArtistList.join(' : ');
  listArtists += '<h3>Vertical Added Order Inverted:</h3>';
  listArtists += newArtistList.reverse().join('<br>');
  listArtists += '<h3>Horizontal Added Order Inverted:</h3>';
  listArtists += newArtistList.join(' | ');
  listArtists += '<h3>Vertical Alphabetical Ascending:</h3>';
  listArtists += newArtistList.sort().join('<br>');
  listArtists += '<h3>Horizontal Alphabetical Ascending:</h3>';
  listArtists += newArtistList.join(', ');
  listArtists += '<h3>Vertical Alphabetical Descending:</h3>';
  listArtists += newArtistList.sort().reverse().join('<br>');
  listArtists += '<h3>Horizontal Alphabetical Descending:</h3>';
  listArtists += newArtistList.join(' >> ');

  listAlbums += '<h3>Vertical Added Order:</h3>';
  listAlbums += newAlbumList.join('<br>');
  listAlbums += '<h3>Horizontal Added Order:</h3>';
  listAlbums += newAlbumList.join(' : ');
  listAlbums += '<h3>Vertical Added Order Inverted:</h3>';
  listAlbums += newAlbumList.reverse().join('<br>');
  listAlbums += '<h3>Horizontal Added Order Inverted:</h3>';
  listAlbums += newAlbumList.join(' | ');
  listAlbums += '<h3>Vertical Alphabetical Ascending:</h3>';
  listAlbums += newAlbumList.sort().join('<br>');
  listAlbums += '<h3>Horizontal Alphabetical Ascending:</h3>';
  listAlbums += newAlbumList.join(', ');
  listAlbums += '<h3>Vertical Alphabetical Descending:</h3>';
  listAlbums += newAlbumList.sort().reverse().join('<br>');
  listAlbums += '<h3>Horizontal Alphabetical Descending:</h3>';
  listAlbums += newAlbumList.join(' >> ');

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
  console.log('on click', songList)
  console.log('on click', artistList)
  console.log('on click', albumList)
  addSong.value = '';
  addAlbum.value = '';
  addArtist.value = '';
  listElements();
  populateSongs();
})

populateSongs();
