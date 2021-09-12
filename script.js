function LosowanieZdjecia()
{
	var pnewfoto = document.getElementById("newfoto");
	var newFoto = document.createElement("img");
	newFoto.src = `photos/${Math.floor(Math.random() * 5)}.jpg`;
	pnewfoto.appendChild(newFoto);
}

document.addEventListener("DOMContentLoaded",LosowanieZdjecia);