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

  // If the user is offline they will appear offline with their logo
  if (status === "null") {
    document.write("<div class='offline'><img src='" + logo + "' alt='User logo' class='user-logo'><h2>" + user + "</h2><p>Offline</p></div>");
  } else {
      // Display username, logo and stream name
      function writeIt() {
        document.write("<div class='online'><img src='" + logo + "' alt='User logo' class='user-logo'><h2>" + user + "</h2><p>" + j.stream.game + "</p></div>");
  }
    writeIt();
  }
}
