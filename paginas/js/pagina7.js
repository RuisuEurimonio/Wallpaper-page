
const Galeria = document.querySelector(".contenido");

const FNombre = ["man.jpg","pink.jpg","nigth.jpg","fight.jpg","girl.jpg","watch.jpg","future.jpg","lol.jpg",
"fantasy.jpg","zerotwo.jpg","darling.jpg","zero.jpg"];
const Nombre = ["Man Space Purple","Pink Girl Anime","Nigth Anime Girl","Car Girl Figth","Girl Car Fantasy","Man Watch Future",
"Future Girl Nigth","Girl LOL Nigth","Girl LOL fantasy","Girl Pink Zerotwo","Pink Girl Anime","Man Anime Zerotwo"];
const FResolucion = ["7680x4320","1920x1080","2478x1422","2358x1000","3000x1875","2048x1195","4000x2250","4095x2398",
"3900x2200","2560x1440","9427x5016","3322x1869"];

function crearMarco(fnombre,nombre,resolucion){
	img = `<img class="imagen-gar" src="../imagenes/pagina7/${fnombre}" alt="${nombre}" title="${nombre}">`;
	titulo = `<h2 class="title-gar"> ${nombre} </h2>`;
	div = `<div class="container-info">`;
	maxR = `<p class="resolucion-gar"> Max resolución:${resolucion}</p>`;
	descargar = `<a href="../imagenes/pagina7/${fnombre}" target="_blank" donwload="${fnombre}" class="full-gar"> Full Screen. </a>`;
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