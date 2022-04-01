
const Galeria = document.querySelector(".contenido");

const FNombre = ["WOW.jpg","fight.jpg","Girl.jpg","magic.jpg","fantasy.jpg","game.jpg","katana.jpg","dark.jpg","Rain.jpg",
"fantasia.jpg","demon.jpg","samurai.jpg"];
const Nombre = ["Game Wow War","Game Figth Wow","Game Girl Wow","Game Girl Magic","Game Fantasy Girl","Game Katana Girl",
"Katana Figth Girl","Dark Girl Katana","Katana Rain Girl","Katana Fantasy Demon","Fantasy Demon Figth","Katana Samurai Fantasy"];
const FResolucion = ["1920x1060","2560x1440","2845x1600","2048x1201","4619x2802","1920x962","1920x1080","1920x1080","1920x1080",
"4800x2800","2560x1440","1920x1080"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina4/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina4/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
	div2 = `</div>`
	return [img, titulo, div, maxR, descargar, div2];
}

let documentFragment = document.createDocumentFragment();


for ( i = 0 ; i < FNombre.length ; i++) {
	const NombreF = `${Nombre[i]}`.split(" ");
	const NombreE = `${NombreF}`.toLowerCase();
	const ResolucionF = `${FResolucion[i]}`.split("x"||"X");
	const Marco = document.createElement("DIV");
	Marco.classList.add("Container-marco", `tag,${NombreE},${ResolucionF}`);
	const Marcos = crearMarco(`${FNombre[i]}`,`${Nombre[i]}`,`${FResolucion[i]}`);
	Marco.tabIndex = i;
	Marco.innerHTML = Marcos[0] + Marcos[1] + Marcos[2] + Marcos[3] + Marcos[4] + Marcos[5];
	documentFragment.appendChild(Marco);
}

Galeria.appendChild(documentFragment);