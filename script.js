var ball = document.querySelector(".eye_ball");
document.onmousemove = function(){

	var x = event.clientX * 75 / window.innerWidth + "%";
	var y = event.clientY * 75 / window.innerHeight + "%";

	console.log(x + " " + y);


	ball.style.left = x;
	ball.style.top = y;
	ball.style.transform = "translate(-"+x+",-"+y+")";
}