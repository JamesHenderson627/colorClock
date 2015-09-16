window.onload = function() {

	var newTime = document.getElementById("clock");
		hexColor = document.getElementById("container")
		bar = document.getElementById("progressBar");

	var adjustTime = function(n) {
		if (n < 10) {n = "0" + n}
			return n
	}

	var makeClock = function() {
		time = new Date();
		hours = adjustTime(time.getHours());
		minutes = adjustTime(time.getMinutes());
		seconds = adjustTime(time.getSeconds());
		clock = "<p>" + hours + ":" + minutes + ":" + seconds + "</p>"
		newTime.innerHTML = clock
	}

	var changeHex = function() {

	}

	var changeBar = function() {
	}

	newTime.onmouseover = function() {
		newTime.innerHTML = "<p>" + "E0:D1:C2" + "</p>";
	}
	newTime.onmouseout = function() {
		newTime.innerHTML = "<p>" + hours + ":" + minutes + ":" + seconds + "</p>";
	}

	setInterval(makeClock, 1000)

}