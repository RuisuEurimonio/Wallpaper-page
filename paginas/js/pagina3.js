
const Galeria = document.querySelector(".contenido");

const FNombre = ["circle.jpg","cube.jpg","triangle.jpg","figure.jpg","minimalism.jpg","purple.jpg","dark.jpg",
"space.jpg","planet.jpg","blue.jpg","watch.jpg","light.jpg"];
const Nombre = ["Figure Neon Circle","Figure Neon Light","Figure Neon Triangle","Figure Minimalism Dark",
"Minimalism Triangle Blue","Figure Purple Triangle","Figure Space Circle","Dark Space Cicle","Minimalism Space Circle",
"Blue Space Light","Blue Space Purple","Dark Space Light"];
const FResolucion = ["3840x2160","1920x1080","3840x2160","1920x1200","1920x1080","1920x1080","1920x1080","1920x1080","2560x1440",
"2560x1440","3840x2160","1920x1080"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina3/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina3/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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