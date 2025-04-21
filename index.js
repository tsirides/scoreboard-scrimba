let homeScore = 0;
let awayScore = 0;

function addPointHome(scoreboardName, number, team) {
  if (team == "home") {
    homeScore += number;
    document.getElementById(scoreboardName).innerText = homeScore;
  } else {
    awayScore += number;
    document.getElementById(scoreboardName).innerText = awayScore;
  }

  //Check which team leads and add a new class that highlights the leader.
  if (homeScore > awayScore) {
    document.getElementById("awayPoints").classList.remove("leading");
    document.getElementById("homePoints").classList.add("leading");
  } else if (homeScore < awayScore) {
    document.getElementById("homePoints").classList.remove("leading");
    document.getElementById("awayPoints").classList.add("leading");
  } else {
    document.getElementById("homePoints").classList.remove("leading");
    document.getElementById("awayPoints").classList.remove("leading");
  }
}

function newGame() {
  homeScore = 0;
  document.getElementById("homePoints").innerText = homeScore;

  awayScore = 0;
  document.getElementById("awayPoints").innerText = awayScore;

  document.getElementById("homePoints").classList.remove("leading");
  document.getElementById("awayPoints").classList.remove("leading");
}
