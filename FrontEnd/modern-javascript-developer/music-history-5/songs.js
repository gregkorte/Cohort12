$(document).ready(function() {

  var songList = ['Dogs', 'Fields of Gold', 'Perpetual Change', 'Signify', 'Feather', 'Immigrant Song', 'Tomorrow Never Knows', 'New Slang', 'Over Now', 'Sledgehammer'];
  var artistList = ['Pink Floyd', 'Sting', 'Yes', 'Porcupine Tree', 'Nujabes', 'Led Zeppelin', 'The Beatles', 'The Shins', 'Alice In Chains', 'Peter Gabriel'];
  var albumList = ['Animals', 'Ten Summoner\'s Tales', 'The Yes Album', 'Signify', 'Modal Soul', 'Led Zeppelin III', 'Revolver', 'Oh, Inverted World', 'Alice In Chains', 'So!'];

  var songs = [];
  var newSongs = [];
  var output = $('#songOutput');
  var addMusicLink = $('#add-music-view-link');
  var listMusicLink = $('#list-music-view-link');
  var addMusicView = $('#add-music-view');
  var listMusicView = $('#list-music-view');
  var addSongBtn = $('#add-song-btn');
  var addSong = $('#add-song');
  var addArtist = $('#add-artist');
  var addAlbum = $('#add-album');
  var listAddSongs = $('#list-add-songs');
  var listAddArtists = $('#list-add-artists');
  var listAddAlbums = $('#list-add-albums');

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
      output.html('');
      for (var i = 0; i < songs.length; i++){
        newSongs.push(songs[i]);
        output.append("<div class='song'>" + songs[i].title + " by "
                + songs[i].artist + " on the album, " + songs[i].album
                + "<input type='button' class='delBtn' value='Delete'>"
                + "</div>")
      }
      output.append("<div id='more'></div>"
              + "<input type='button' id='moreBtn' value='More'>");
      loadDynamicEvents();
      break;
    case 'second':
      var more = $('#more');
      var moreBtn = $('#moreBtn');
      more.html('');
      for (var i = 0; i < songs.length; i++){
        newSongs.push(songs[i]);
        more.append("<div class='song'>" + songs[i].title + " by "
                + songs[i].artist + " on the album, " + songs[i].album
                + "<input type='button' class='delBtn' value='Delete'>"
                + "</div>")
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

    listAddSongs.html(listSongs);
    listAddArtists.html(listArtists);
    listAddAlbums.html(listAlbums);
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
    populateSongs();
  })

});
