// Datos de ejemplo
const datos = {
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: "The Guardian",
  formato: "Realidad Virtual / 360°",
  url: "https://www.theguardian.com/world/ng-interactive/2016/apr/27/6x9-a-virtual-experience-of-solitary-confinement#gvr-360",
  argumento: "Esta experiencia en VR recrea lo que significa estar en confinamiento solitario...",
  reflexion: "La capacidad inmersiva de esta experiencia es muy potente..."
};

// Insertar datos
document.getElementById("nombre").textContent = datos.nombre;
document.getElementById("anio").textContent = datos.anio;
document.getElementById("medio").textContent = datos.medio;
document.getElementById("formato").textContent = datos.formato;
document.getElementById("url").href = datos.url;
document.getElementById("argumento").textContent = datos.argumento;
document.getElementById("reflexion").textContent = datos.reflexion;

// Interactividad: mostrar/ocultar argumento
const btnArgumento = document.getElementById("toggleArgumento");
const argumentoTexto = document.getElementById("argumento");

btnArgumento.addEventListener("click", () => {
  if (argumentoTexto.classList.contains("mostrar")) {
    argumentoTexto.classList.remove("mostrar");
    argumentoTexto.classList.add("oculto");
    btnArgumento.textContent = "Mostrar argumento";
  } else {
    argumentoTexto.classList.remove("oculto");
    argumentoTexto.classList.add("mostrar");
    btnArgumento.textContent = "Ocultar argumento";
  }
});

// Interactividad: mostrar/ocultar reflexión
const btnReflexion = document.getElementById("toggleReflexion");
const reflexionTexto = document.getElementById("reflexion");

btnReflexion.addEventListener("click", () => {
  if (reflexionTexto.classList.contains("mostrar")) {
    reflexionTexto.classList.remove("mostrar");
    reflexionTexto.classList.add("oculto");
    btnReflexion.textContent = "Mostrar reflexión";
  } else {
    reflexionTexto.classList.remove("oculto");
    reflexionTexto.classList.add("mostrar");
    btnReflexion.textContent = "Ocultar reflexión";
  }
});