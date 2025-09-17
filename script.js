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
    en: "This VR experience simulates the life of a prisoner in solitary confinement. The user navigates a 6x9-foot virtual cell, observing the environment and listening to recorded testimonies.",
    es: "Esta experiencia VR simula la vida de un preso en confinamiento solitario. El usuario recorre una celda virtual de 6x9 pies, observando el entorno y escuchando testimonios grabados."
  },
  reflexion: {
    en: "The experience invites viewers to reflect on human rights and prison conditions, emphasizing the psychological impact of isolation.",
    es: "La experiencia invita a los espectadores a reflexionar sobre los derechos humanos y las condiciones carcelarias, enfatizando el impacto psicológico del aislamiento."
  },
  analisis: {
    en: "The VR piece is not only an artistic experience but also a journalistic experiment. By simulating the cell environment, The Guardian uses immersive media to strengthen its investigative reporting. This approach bridges journalism and activism, encouraging audiences to reflect on systemic issues such as prison reform and human rights.",
    es: "La pieza VR no es solo una experiencia artística, sino también un experimento periodístico. Al simular el entorno de la celda, The Guardian utiliza medios inmersivos para reforzar su periodismo de investigación. Este enfoque conecta el periodismo con el activismo, invitando al público a reflexionar sobre problemas sistémicos como la reforma penitenciaria y los derechos humanos."
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

  // Actualizar Plot y Reflexión
  document.getElementById("argumento").textContent = isEnglish ? datos.argumento.en : datos.argumento.es;
  document.getElementById("reflexion").textContent = isEnglish ? datos.reflexion.en : datos.reflexion.es;

// Análisis
document.getElementById("analisis").textContent = isEnglish ? datos.analisis.en : datos.analisis.es;
document.getElementById("titulo-analisis").textContent = isEnglish ? "Analysis" : "Análisis";

  // Actualizar títulos
  document.getElementById("titulo-principal").textContent = isEnglish ? "Interactive Experience Sheet" : "Ficha de la Experiencia Interactiva";
  document.getElementById("titulo-video").textContent = isEnglish ? "Experience Video" : "Video de la Experiencia";

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

    // Scroll suave hacia el contenido mostrado
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

