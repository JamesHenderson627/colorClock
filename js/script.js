window.onload = function() {

	var newTime = document.getElementById("clock"),
		hexColor = document.getElementById("container"),
		hexTime = document.getElementById("hex"),
		bar = document.getElementById("progressBar"),
		width = new Date().getSeconds() * 5;

	// For Time
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

	function hexToTime() {
		var date = new Date(),
			hexSecond = toStr(date.getSeconds() * 255/60).toUpperCase(),
			hexMinute = toStr(date.getMinutes() * 255/60).toUpperCase(),
			hexHour = toStr((date.getHours() * 255/24)-3).toUpperCase(),
			colors = '#' + hexHour + hexMinute + hexSecond;


		hexTime.innerHTML = "<p>" + hexHour + ":" + hexMinute + ":" + hexSecond + "</p>";		
	    hexColor.style.background = "-webkit-radial-gradient(center, circle cover, #FFFFE6," + colors + ")";
	}

	// For Hex Numbers
	function add0(num) {
	    var dig = num + "";
	    if (dig.length < 2) dig = "0" + dig;
	    return dig;
	}

	function toStr(num){
		return add0((Math.round(num)).toString(16));
	}

	var changeBar = function() {
		if (width <= 300) width += 5;
		if (width > 300) width = 0;

		bar.style.width = width + "px";
		return bar.style.width;
	}

	var updateView = function() {
		makeClock();
		changeBar();
		hexToTime();
	}

	updateView();

	setInterval(updateView, 1000)

}