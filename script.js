const datos = {
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: {
    en: "The Guardian\nBritish newspaper known for independent journalism",
    es: "The Guardian\nPeriódico británico reconocido por su periodismo independiente"
  },
  formato: "Realidad Virtual / 360°",
  url: "https://www.theguardian.com/world/ng-interactive/2016/apr/27/6x9-a-virtual-experience-of-solitary-confinement#gvr-360",
  argumento: {
    en: "This VR experience recreates what it means to be in solitary confinement. Users can feel the psychological pressure, isolation, and the extreme monotony of a 6x9 cell. The experience is designed to create empathy and awareness of prison conditions.",
    es: "Esta experiencia en VR recrea lo que significa estar en confinamiento solitario. Los usuarios pueden sentir la presión psicológica, el aislamiento y la extrema monotonía de una celda de 6x9. La experiencia busca generar empatía y conciencia sobre las condiciones carcelarias."
  },
  reflexion: {
    en: "The project was created to raise awareness about the psychological impact of solitary confinement. The Guardian used virtual reality to immerse the audience, showing how journalism can extend beyond text to provoke deeper understanding of human rights issues.",
    es: "El proyecto se realizó para visibilizar el impacto psicológico del confinamiento solitario. The Guardian utilizó la realidad virtual para sumergir a la audiencia, mostrando cómo el periodismo puede ir más allá del texto y generar una comprensión más profunda sobre los derechos humanos."
  }
};

let isEnglish = true;

// ========================
// Función para actualizar el contenido según el idioma
function updateLanguage() {
  document.getElementById("nombre").textContent = datos.nombre;
  document.getElementById("anio").textContent = datos.anio;
  document.getElementById("medio").textContent = isEnglish ? datos.medio.en : datos.medio.es;
  document.getElementById("formato").textContent = datos.formato;
  document.getElementById("url").href = datos.url;

  
  document.getElementById("argumento").textContent = isEnglish ? datos.argumento.en : datos.argumento.es;
  document.getElementById("reflexion").textContent = isEnglish ? datos.reflexion.en : datos.reflexion.es;

  document.getElementById("medio-info").textContent = isEnglish 
    ? "The Guardian is a British newspaper founded in 1821, recognized worldwide for its independent journalism, investigative reporting, and progressive editorial stance."
    : "The Guardian es un periódico británico fundado en 1821, reconocido mundialmente por su periodismo independiente, reportajes de investigación y postura editorial progresista.";

  // Actualizar títulos
  document.getElementById("titulo-principal").textContent = isEnglish ? "Interactive Experience Sheet" : "Ficha de la Experiencia Interactiva";
  document.getElementById("titulo-video").textContent = isEnglish ? "Experience Video" : "Video de la Experiencia";
  document.getElementById("titulo-medio").textContent = "The Guardian";
  document.getElementById("titulo-plot").textContent = isEnglish ? "Plot" : "Argumento";
  document.getElementById("titulo-reflexion").textContent = isEnglish ? "Final Reflection" : "Reflexión Final";
}

// Inicializar contenido al cargar la página
updateLanguage();

// ========================
// Botón para cambiar idioma
const langBtn = document.getElementById("toggleLang");
langBtn.addEventListener("click", () => {
  isEnglish = !isEnglish;
  updateLanguage();
  langBtn.textContent = isEnglish ? "🌐 Español" : "🌐 English";
});

// ========================
// Botones toggle de mostrar/ocultar contenido
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);

    target.classList.toggle('mostrar');
    target.classList.toggle('oculto');

    btn.textContent = target.classList.contains('mostrar') 
      ? (isEnglish ? `Hide ${targetId.replace("-", " ")}` : `Ocultar ${targetId.replace("-", " ")}`)
      : (isEnglish ? `Show ${targetId.replace("-", " ")}` : `Mostrar ${targetId.replace("-", " ")}`);


    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ========================
// Reproducción de audio
const audio = document.getElementById('audio');


window.addEventListener('load', () => {
  audio.play().catch(err => {
    console.log('Autoplay bloqueado. El usuario debe hacer click para escuchar.', err);
  });
});


const btnPlayAudio = document.getElementById('playAudio');
btnPlayAudio.addEventListener('click', () => {
  audio.play();
});