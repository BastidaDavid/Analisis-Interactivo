const datos = 
{
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: "The Guardian – British newspaper known for independent journalism",
  formato: "Realidad Virtual / 360°",
  url: "https://www.theguardian.com/world/ng-interactive/2016/apr/27/6x9-a-virtual-experience-of-solitary-confinement#gvr-360",
  argumento: {
    en: "This VR experience recreates what it means to be in solitary confinement...",
    es: "Esta experiencia en VR recrea lo que significa estar en confinamiento solitario..."
  },
  reflexion: {
    en: "This project was created to raise awareness about the psychological impact of solitary confinement...",
    es: "Este proyecto se realizó para visibilizar el impacto psicológico del confinamiento solitario..."
  }
};

let isEnglish = true;

// ========================
// Función para actualizar el contenido según el idioma
function updateLanguage() {
  document.getElementById("nombre").textContent = datos.nombre;
  document.getElementById("anio").textContent = datos.anio;
  document.getElementById("medio").textContent = datos.medio;
  document.getElementById("formato").textContent = datos.formato;
  document.getElementById("url").href = datos.url;

  document.getElementById("argumento").textContent = isEnglish ? datos.argumento.en : datos.argumento.es;
  document.getElementById("reflexion").textContent = isEnglish ? datos.reflexion.en : datos.reflexion.es;

  document.getElementById("medio-info").textContent = isEnglish 
    ? "The Guardian is a British newspaper founded in 1821, recognized worldwide for its independent journalism, investigative reporting, and progressive editorial stance."
    : "The Guardian es un periódico británico fundado en 1821, reconocido mundialmente por su periodismo independiente, reportajes de investigación y postura editorial progresista.";
}

// Inicializar contenido en inglés al cargar
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

    // Scroll suave hacia el contenido mostrado
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ========================
// Reproducción de audio
const audio = document.getElementById('audio');

// Intentar reproducir automáticamente al cargar la página
window.addEventListener('load', () => {
  audio.play().catch(err => {
    console.log('Autoplay bloqueado. El usuario debe hacer click para escuchar.', err);
  });
});

// Botón para reproducir audio si autoplay falla
const btnPlayAudio = document.getElementById('playAudio');
btnPlayAudio.addEventListener('click', () => {
  audio.play();
});