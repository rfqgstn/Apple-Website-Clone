function openMenu(name) {
	var i;
	var x = document.getElementsByClassName("apple");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; 
	}
	document.getElementById(name).style.display = "block"; 
}
function newImage(e){
	e.src = "img/apple-logo-white.png"
}

function oldImage(e){
	e.src = "img/apple-logo.png"
}