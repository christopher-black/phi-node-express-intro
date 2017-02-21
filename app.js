// Step 1
var express = require('express');

// Step 2
// npm init
// npm install express --save

// Step 3
var app = express();
app.use(express.static('public'));
app.listen(5000);

// Step 4
var songList = [
  {
    title:'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Fire in my Heart',
    artist: 'Jonny Cash'
  }
];

// Step 5 - Also in client.js
app.get("/songs", function(req, res){
  res.send(songList);
});

// Step 6 - Also in client.js
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.post("/newSong", function(req, res){
  var newSong = req.body;
  songList.push(newSong);
  res.sendStatus(200);
});
