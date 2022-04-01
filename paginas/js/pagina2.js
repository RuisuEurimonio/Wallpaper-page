
const Galeria = document.querySelector(".contenido");

const FNombre = ["cyberpunk.jpg","city.jpg","future.jpg","car.jpg","man.jpg","epic.jpg","street.jpg","night.jpg","Blue.jpg",
"purple.jpg","Morado.jpg","azul.jpg"];
const Nombre = ["Girl Night Cyberpunk","City Night","City Night Future","Car Night Man","Car Man City",
"Epic Night City","Neon Night City","Car Night City","Blue City Future","Purple City Future","Purple City Epic",
"Blue City Neon"];
const FResolucion = ["3840x2160","3840x2160","3840X2160","3840x2160","3840x2400","3840x2160","3840x2160","1920x1080",
"4618x2220","2057x1008","2000x1109","3840x2160"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina2/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina2/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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