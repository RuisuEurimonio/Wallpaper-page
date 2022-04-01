
const Galeria = document.querySelector(".contenido");

const FNombre = ["man.jpg","kimetsu.jpg","anime.jpg","satanic.jpg","girls.jpg","fantasy.jpg","demon.jpg","dark.jpg",
"statue.jpg","space.jpg","car.jpg","purple.jpg"];
const Nombre = ["Man Anime Kimetsu","Anime Fantasy Kimetsu","Anime Figth Kimetsu","Girl Anime Satanic","Anime Dark Satanic",
"Satanic Dark Fantasy","Demon Satanic Dark","Dark Satanic Girl","Statue","Space Statue","Car Night Neon","Car Night Purple"];
const FResolucion = ["1920x1080","1920x1080","2500x1228","3840x2160","4320x2432","1885x1295","5899x3840","1920x1080",
"1920x1080","1980x1080","3840x2160","1920x1080"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina6/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina6/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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