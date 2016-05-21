var songs = [];
var newSongs = [];
var output = document.getElementById('songOutput');

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Perpetual Change > by Yes on the album The Yes Album");
songs.unshift("Sheep > by Pink Floyd on the album Animals");

for (var i = 0; i < songs.length; i++){
  var newSong = songs[i].replace(/[(*@!]/g, '').replace('>', '-');
  newSongs.push(newSong);
  output.innerHTML += "<div>" + newSong; + "</div>";
}

console.log(newSongs);