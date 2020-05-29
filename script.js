function randomNumber(from, to) {
	return Math.floor(Math.random() * (to - from)) + from;
}
function twoDigit(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}
function abbr(num) {
	var x;
	if (num >= 100000000) {
		return Math.floor(num/1000000) + "M";
	} else if (num > 10000000) {
		x = Math.floor((num/1000000)*10)/10;
		return x.toPrecision(3) + "M";
	} else if (num > 1000000) {
		x = Math.floor((num/1000000)*100)/100;
		return x.toPrecision(3) + "M";
	} else if (num > 100000) {
		return Math.floor(num/1000) + "K";
	} else if (num > 10000) {
		x = Math.floor((num/1000)*10)/10;
		return x.toPrecision(3) + "K";
	} else if (num > 1000) {
		x = Math.floor((num/1000)*100)/100;
		return x.toPrecision(3) + "K";
	} else {
		return num;
	}
}
var acc = "PewDiePie";
var subs = 103004394;
var changeBy;
var min = -1;
var max = 3;
var chance = 50;
var time = new Date();
function foo() {
	document.getElementById("real").innerHTML = abbr(subs);
	document.getElementById("time").innerHTML = twoDigit(time.getHours()) + ":" + twoDigit(time.getMinutes()) + ":" + twoDigit(time.getSeconds());
	document.getElementById("acc").innerHTML = acc;
	document.getElementById("subs").innerHTML = subs.toLocaleString();
	var timer = setInterval(myTimer, 1000);
	function myTimer() {
		var time = new Date();
		document.getElementById("time").innerHTML = twoDigit(time.getHours()) + ":" + twoDigit(time.getMinutes()) + ":" + twoDigit(time.getSeconds());
		if (randomNumber(0,100)<=chance) {
		    changeBy = randomNumber(min, max);
		} else {
		    changeBy = 0;
		}
		if (changeBy > 0) {
			document.getElementById("subs").style.animation = "plus 1s infinite";
			var increase = setInterval(up, 100/changeBy);
			var u = 0;
			function up() {
				subs = subs + 1;
				u++;
				if (u > changeBy) {
					clearInterval(increase);
				}
				document.getElementById("subs").innerHTML = subs.toLocaleString();
				document.getElementById("real").innerHTML = abbr(subs);
			}
		} else if (changeBy < 0){
			document.getElementById("subs").style.animation = "minus 1s infinite";
			var decrease = setInterval(down, 100/Math.abs(changeBy));
			var d = 0;
			function down() {
				subs = subs - 1;
				d++;
				if (d > Math.abs(changeBy)) {
					clearInterval(decrease);
				}
				document.getElementById("subs").innerHTML = subs.toLocaleString();
				document.getElementById("real").innerHTML = abbr(subs);
			}
		} else {
			document.getElementById("subs").style.animation = "same 1s infinite";
		}
	}
	document.getElementById("title").innerHTML = acc + ": " + subs.toLocaleString();
}
function setRandom() {
	acc = prompt("What account?");
	subs = Number(prompt("How many subs?"));
	min = Number(prompt("Min:"));
	max = Number(prompt("Max:")) + 1;
	chance = Number(prompt("Chance:"));
	document.getElementById("acc").innerHTML = acc;
	document.getElementById("subs").innerHTML = subs.toLocaleString();
	document.getElementById("real").innerHTML = abbr(subs);
	document.getElementById("subs").style.animation = "same 1s infinite";
}
