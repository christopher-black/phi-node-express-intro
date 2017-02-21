$(document).ready(function(){
  console.log("jquery was correctly sourced");

  // Step 5 - also in app.js
  $.ajax({
    type: 'GET',
    url: '/songs',
    success: function(response) {
      console.log(response);
    }
  });

  // Step 6
  $('#addSongButton').on('click', function() {
    var newSongTitle = $('#title').val();
    var newSongArtist = $('#artist').val();
    var newSong = {name: newSongTitle, artist: newSongArtist};
    console.log(newSong);
    $.ajax({
      type: 'POST',
      url: '/newSong',
      data: newSong,
      success: function(response) {
        console.log(response);
      }
    });
  });

  // Step 7 - refactor into functions e.g. getAllSongs()
});
