function updateCountDown(){
	const countDay = new Date("Oct 10, 2026 00:00:00").getTime();
	const now = new Date().getTime();
	const gap = countDay - now;

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	document.getElementById('days').innerText = textDay;
	document.getElementById('hours').innerText = textHour;
	document.getElementById('minutes').innerText = textMinute;
	document.getElementById('seconds').innerText = textSecond;
}

setInterval(updateCountDown, 1000);
