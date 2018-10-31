var team1, team2;
team1 = 0;
team2 = 0;
function scorefunc1(x) {
	team1 = team1 + x;
	document.getElementById("score1").innerHTML = team1;
}

function scorefunc2(x) {
	team2 = team2 + x;
	document.getElementById("score2").innerHTML = team2;
}