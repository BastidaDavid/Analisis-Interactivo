// Datos de la experiencia
const datos = {
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: "The Guardian",
  formato: "Realidad Virtual / 360°",
  url: "https://www.theguardian.com/world/ng-interactive/2016/apr/27/6x9-a-virtual-experience-of-solitary-confinement#gvr-360",
  argumento: "Esta experiencia en VR recrea lo que significa estar en confinamiento solitario en una celda de 6x9 pies. A través de imágenes inmersivas y testimonios reales, el usuario se transporta a la rutina claustrofóbica de los prisioneros, mostrando los efectos psicológicos y emocionales de este tipo de aislamiento. El objetivo es concienciar sobre una práctica carcelaria que afecta gravemente la salud mental de miles de personas en todo el mundo.",
  reflexion: "La capacidad inmersiva de esta experiencia es muy potente: realmente te hace sentir atrapado en un espacio reducido, sin escapatoria, con un ambiente que transmite ansiedad y desesperanza. Al usar un entorno VR, no solo observas, sino que participas en primera persona, percibiendo la soledad y la tensión del confinamiento. Personalmente, sí me sentí parte de lo que se cuenta, porque la interacción con el entorno y la sensación espacial me colocaron dentro de la narrativa. Es una herramienta muy poderosa para generar empatía y reflexión social."
};

// Insertar datos en el HTML
document.getElementById("nombre").textContent = datos.nombre;
document.getElementById("anio").textContent = datos.anio;
document.getElementById("medio").textContent = datos.medio;
document.getElementById("formato").textContent = datos.formato;
document.getElementById("url").href = datos.url;
document.getElementById("argumento").textContent = datos.argumento;
document.getElementById("reflexion").textContent = datos.reflexion;

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