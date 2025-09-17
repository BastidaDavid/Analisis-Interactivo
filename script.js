// Insertar datos
const datos = {
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: "The Guardian",
  formato: "Realidad Virtual / 360°",
  url: "https://www.theguardian.com/world/ng-interactive/2016/apr/27/6x9-a-virtual-experience-of-solitary-confinement#gvr-360",
  argumento: {
    en: "This VR experience recreates what it means to be in solitary confinement...",
    es: "Esta experiencia en VR recrea lo que significa estar en confinamiento solitario..."
  },
  reflexion: {
    en: "This project was created to raise awareness about the psychological impact of solitary confinement in prisons. The Guardian aimed to generate empathy and social awareness by using virtual reality as an immersive medium, allowing users to experience extreme isolation firsthand. The core reflection is that journalism can rely on technology to go beyond written information and create deeper awareness among audiences about human and social issues.",
    es: "Este proyecto se realizó para visibilizar el impacto psicológico del confinamiento solitario en las cárceles. The Guardian buscó generar empatía y conciencia social utilizando la realidad virtual como medio inmersivo, permitiendo que los usuarios experimentaran en primera persona el aislamiento extremo. La reflexión central es que el periodismo puede apoyarse en la tecnología para ir más allá de la información escrita y sensibilizar de manera más profunda a la audiencia sobre problemáticas humanas y sociales."
  }
};

let isEnglish = true;

// Función para actualizar contenido según idioma
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

// Inicializar contenido en inglés
updateLanguage();

// Toggle para idioma
const langBtn = document.getElementById("toggleLang");
langBtn.addEventListener("click", () => {
  isEnglish = !isEnglish;
  updateLanguage();
  langBtn.textContent = isEnglish ? "🌐 Español" : "🌐 English";
});

// Funcionalidad para todos los botones toggle de mostrar/ocultar contenido
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

// Intentar reproducir automáticamente al cargar la página
window.addEventListener('load', () => {
  audio.play().catch(err => {
    console.log('Autoplay bloqueado, el usuario debe hacer click para escuchar.', err);
  });
});

// Botón para reproducir audio si el navegador bloquea autoplay
const btnPlayAudio = document.getElementById('playAudio');
btnPlayAudio.addEventListener('click', () => {
  audio.play();
});