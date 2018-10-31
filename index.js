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

function change() {
	name1 = prompt('What is the name for team one?');
	name2 = prompt('What is the name for team two?');
	document.getElementById('name1').innerHTML = name1;
	document.getElementById('name2').innerHTML = name2;
}

function reset() {
	document.getElementById('name1').innerHTML = "One";
	document.getElementById('name2').innerHTML = "Two";
	team1 = 0;
	team2 = 0;
}