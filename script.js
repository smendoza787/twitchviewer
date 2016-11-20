// Array of Twitch Streamers
var streamUsers = ["ESL_SC2", "ASUSROG", "OgamingSC2", "TwitchIN", "freecodecamp", "BeyondTheSummit", "habathcx", "TSM_Dyrus", "esl_brazil"]

// For loop that writes stream info to the page
for (var i=0; i<streamUsers.length; i++) {
  // XHR for Stream info and offline status
  var getStream = new XMLHttpRequest();
  getStream.open("GET", "https://api.twitch.tv/kraken/streams/" + streamUsers[i] + "?client_id=1hyaly9u7oon0vjubgd1ofu3u2w65vr", false);
  getStream.send(null);
  // Assigning JSON data to var j
  var j = JSON.parse(getStream.response);
  // Pulling JSON into variables
  var status = j.stream;

  // XHR for logo
  var getLogo = new XMLHttpRequest();
  getLogo.open("GET", "https://api.twitch.tv/kraken/channels/" + streamUsers[i] + "?client_id=1hyaly9u7oon0vjubgd1ofu3u2w65vr", false);
  getLogo.send(null);

  // Assigning JSON data to var x
  var x = JSON.parse(getLogo.response);
  var logo = x.logo;
  var user = x.display_name;
  var url = x.url;
  var game = x.game;
  var followers = x.followers;

  // If the user is offline they will appear offline with their logo
  if (status === "null") {
    $(".preview").append("<a href='" + url + "' target='_blank'><div class='animated fadeInRight offline hvr-fade-2'><img src='" + logo + "' alt='User logo' class='user-logo'><div class='twitch-info'><h2 class='twitch-user'>" + user + "</h2><p><i class='fa fa-users' aria-hidden='true'></i> Followers: " + followers + "</p></div><p><span class='status'>Offline</span></p></div>");
  } else {
      // Display username, logo and stream name
      function writeIt() {
        $(".preview").append("<a href='" + url + "' target='_blank'><div class='animated fadeInLeft online hvr-fade-2'><img src='" + logo + "' alt='User logo' class='user-logo'><div class='twitch-info'><h2 class='twitch-user'>" + user + "</h2><p><i class='fa fa-users' aria-hidden='true'></i> Followers: " + followers + "</p></div><p><i class='fa fa-gamepad fa-2x' aria-hidden='true'></i><br>Playing:<br><span class='status'>" + game + "</span></p></div>");
  }
    writeIt();
  }
}

// Button functionality

$("#showOffline").click(function(){
  $(".online").hide();
  $(".offline").hide();

  $(".offline").show();
});

$("#showOnline").click(function(){
  $(".online").hide();
  $(".offline").hide();

  $(".online").show();
});

$("#showAll").click(function(){
  $(".online").hide();
  $(".offline").hide();

  $(".online").show();
  $(".offline").show();
});
