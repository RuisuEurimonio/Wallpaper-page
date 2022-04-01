
const Galeria = document.querySelector(".contenido");

const FNombre = ["Samurai.jpg","man.jpg","katana.jpg","figth.jpg","girl.jpg","rain.jpg","women.jpg","anime.jpg",
"demon.jpg","dark.jpg","fantasy.jpg","sky.jpg"];
const Nombre = ["Samurai Rain Katana","Man Rain Katana","Samurai Dark Katana","Man Figth Katana","Girl Epic Katana",
"Girl Rain Katana","Girl Figth Katana","Girl Anime Katana","Girl Demon Anime","Girl Anime Dark","Girl Fantasy Anime",
"Girl Sky Fantasy"];
const FResolucion = ["2520x1120","1554x874","3000x2000","1920x1080","2872x1615","1920x1200","1845x1200","4096x2304",
"2126x1063","3840x2160","6600x4700","4800x2400"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina5/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina5/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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