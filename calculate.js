function calcu() {
	window.money = Number(document.getElementById("money").value);
	window.lessons = Number(document.getElementById("lessons").value * 350);

	document.getElementById("total").value = window.money + window.lessons;
	console.log(window.money + window.lessons);
}
