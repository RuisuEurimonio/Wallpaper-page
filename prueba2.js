




const Galeria = document.querySelector(".contenido");

const FNombre = ["girl.jpg","cielo.jpg", "copa.jpg", "femenino.jpg","LOL.jpg","zenbu.jpg","black.jpg","music.jpg",
"war.jpg","chill.jpg","miku.jpg","sun.jpg"];
const Nombre = ["Girl Pink Anime", "Girl Sky Anime", "Girl Dark Anime", "Girl Watch Fantasy","Game Miku Girl",
"Anime Girl Kimetsu","Girl Dark Anime","Girl Music Anime","Girl War Anime","Girl Watch Anime","Miku Fantasy Girl",
"Girl Watch sky"];
const FResolucion = ["1800x1271","1920x1080","1920x1080","5391x3300","4000x2737","2200x1337","2560x1440","2500x1406",
"2100x990","3840x2160","2560x1440","3840x2160"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="imagenes/index/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="imagenes/index/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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




