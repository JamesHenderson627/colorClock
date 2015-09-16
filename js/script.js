window.onload = function() {
	var adjustTime = function(n) {
		if (n < 10) {n = "0" + n}
			return n
	}

	var makeClock = function() {
		var time = new Date();
		var hours = time.getHours();
		hours = adjustTime(hours);
		var minutes = time.getMinutes();
		minutes = adjustTime(minutes);
		var seconds = time.getSeconds();
		seconds = adjustTime(seconds);
		var clock = "<p>" + hours + ":" + minutes + ":" + seconds + "</p>"


		var newTime = document.getElementById("clock");
		newTime.innerHTML = clock
		
		newTime.onmouseover = function() {
			newTime.innerHTML = "<p>" + "E0:D1:C2" + "</p>";
		}
		newTime.onmouseout = function() {
			newTime.innerHTML = "<p>" + hours + ":" + minutes + ":" + seconds + "</p>";
		}
	}

	var clockWorks = function() {
		makeClock();
	}

	setInterval(clockWorks, 1000)

}