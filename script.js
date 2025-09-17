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
    en: "This VR experience immerses users in the world of solitary confinement, simulating life inside a 6x9 prison cell. Participants experience intense psychological pressure, isolation, and the monotony of confinement. Every sound, shadow, and confined space replicates sensory deprivation, creating a realistic environment. Users navigate routines with minimal interaction, restricted movement, and absence of social contact. The project aims to inform and evoke empathy, making the audience feel the profound effects of isolation. By engaging participants, the creators hope to raise awareness of the human cost of extreme incarceration practices and inspire reflection on ethical and social implications.",
    es: "Esta experiencia en VR sumerge a los usuarios en el mundo del confinamiento solitario, simulando la vida dentro de una celda de 6x9. Los participantes experimentan presión psicológica intensa, aislamiento y la monotonía extrema del confinamiento. Cada sonido, sombra y espacio limitado recrea la privación sensorial, generando un entorno muy realista. Los usuarios atraviesan rutinas con interacción mínima, movimiento restringido y ausencia de contacto social. El proyecto busca informar y generar empatía, haciendo sentir al público los profundos efectos del aislamiento. Los creadores esperan concienciar sobre el costo humano del encarcelamiento extremo e invitar a reflexionar sobre sus implicaciones éticas y sociales."
  },
  reflexion: {
    en: "The project was developed to highlight the psychological and emotional consequences of solitary confinement. Using VR, The Guardian allows participants to experience extreme isolation firsthand, transforming abstract statistics into personal encounters. This storytelling approach shows how journalism can go beyond text to create empathy and understanding. It encourages reflection on ethical dimensions of prison practices, mental health implications for inmates, and society’s responsibility. The experience challenges viewers to consider the balance between security, punishment, and humanity. It demonstrates the power of immersive technology to raise awareness, provoke critical thought, and foster deeper connection with human rights issues.",
    es: "El proyecto se desarrolló para visibilizar las consecuencias psicológicas y emocionales del confinamiento solitario. Usando VR, The Guardian permite a los participantes experimentar el aislamiento extremo en primera persona, transformando estadísticas abstractas en vivencias personales. Este enfoque de narrativa demuestra cómo el periodismo puede ir más allá del texto, generando empatía y comprensión. Invita a reflexionar sobre las dimensiones éticas de las prácticas penitenciarias, las implicaciones en la salud mental de los internos y la responsabilidad de la sociedad. La experiencia desafía a considerar el equilibrio entre seguridad, castigo y humanidad, mostrando el poder de la tecnología inmersiva para concienciar, provocar pensamiento crítico y fomentar una conexión más profunda con los derechos humanos."
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