window.onload = function() {

	var newTime = document.getElementById("clock"),
		hexColor = document.getElementById("container"),
		bar = document.getElementById("progressBar"),
		width = new Date().getSeconds() * 5;

	var adjustTime = function(n) {
		if (n < 10) {n = "0" + n};
			return n;
	}

	var makeClock = function() {
		var time = new Date(),
			hours = adjustTime(time.getHours()),
			minutes = adjustTime(time.getMinutes()),
			seconds = adjustTime(time.getSeconds()),
			clock = "<p>" + hours + ":" + minutes + ":" + seconds + "</p>"
		newTime.innerHTML = clock;
	}

	var changeHex = function() {

	}

	var changeBar = function() {
		if (width <= 300) width += 5;
		if (width > 300) width = 0;

		bar.style.width = width + 'px';
		return bar.style.width;
	}

	var updateView = function() {
		makeClock();
		changeBar();
	}

	updateView()

	setInterval(updateView, 1000)

}