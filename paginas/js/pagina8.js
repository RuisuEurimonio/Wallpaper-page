
const Galeria = document.querySelector(".contenido");

const FNombre = ["miku.jpg","space.jpg","girl.jpg","cyber.jpg","war.jpg","dark.jpg","magic.jpg","zero.jpg","samurai.jpg",
"demon.jpg","fantasy.jpg","epic.jpg"];
const Nombre = ["Miku Sky Girl","Space Figure Music","Girl Music Neon","Cyberpunk Music Neon","War Dark Girl","Dark Demon Magic",
"Magic Girl Fantasy","ZeroTwo Anime Girl","Samurai LOL Game","Demon Figth Epic","Dark Satanic Girl","Epic Game Sky"];
const FResolucion = ["3762x2416","3840x2160","1920x1080","1920x1080","2500x1500","1920x1098","5120x2880","1920x1262","7000x4130",
"1920x1156","1920x1200","9600x5400"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina8/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina8/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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