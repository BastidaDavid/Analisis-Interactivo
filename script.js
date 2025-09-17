const datos = {
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: {
    en: "The Guardian\nBritish newspaper known for independent journalism",
    es: "The Guardian\nPeriódico británico reconocido por su periodismo independiente"
  },

  medioInfo: {
    en: "The Guardian is a British newspaper founded in 1821, recognized worldwide for its independent journalism, investigative reporting, and progressive editorial stance. Founded in 1821 as The Manchester Guardian by John Edward Taylor, it has been part of the Scott Trust since 1936, ensuring financial and editorial independence with profits reinvested into journalism. Editor-in-chief Katharine Viner has led its digital transformation, reaching global audiences, especially in the US, with growing subscription and donation revenue. In 2018 it adopted a modern tabloid format for print. Innovations like Secure Messaging, developed with Cambridge University, allow secure communication between journalists and sources. The Guardian focuses on human rights, social justice, and the environment, combining narrative, investigation, and technology to foster empathy, awareness, and critical reflection. Its reader-funded model ensures independence from corporations or governments, making it a global benchmark of ethical journalism.",
    es: "The Guardian es un periódico británico fundado en 1821, reconocido mundialmente por su periodismo independiente, reportajes de investigación y postura editorial progresista. Fundado en 1821 como The Manchester Guardian por John Edward Taylor, pertenece al Scott Trust desde 1936, garantizando su independencia financiera y editorial, con beneficios reinvertidos en periodismo. La editora en jefe, Katharine Viner, ha impulsado su transformación digital, alcanzando audiencias globales, especialmente en Estados Unidos, y generando ingresos crecientes mediante suscripciones y donaciones. En 2018 adoptó un formato tabloide moderno para la edición impresa. Innovaciones como la herramienta Secure Messaging, desarrollada con la Universidad de Cambridge, permiten comunicaciones seguras entre periodistas y fuentes. The Guardian se centra en derechos humanos, justicia social y medio ambiente, combinando narrativa, investigación y tecnología para generar empatía, conciencia y reflexión crítica. Su modelo de financiamiento basado en lectores asegura independencia frente a corporaciones o gobiernos, consolidándolo como referente global del periodismo ético y de calidad."
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
  },
  analisis: {
    en: `For me, This VR experience combines narrative storytelling with interactive elements. 
The narrative unfolds through environmental details, sound design, and the testimonies of former prisoners, immersing the user in the emotional and psychological atmosphere of the prision. 
Interactivity allows the user to explore the cell at their own pace, creating a sense of agency while emphasizing isolation in a bit place. 
The combination of audio, visual cues, and movement engages multiple sensorial senses, reinforcing empathy and understanding of the narrative. 
Overall, the piece demonstrates how immersive technology enhance journalistic storytelling by merging reporting with experiential immersion.`,
    es: `Para mi , esta experiencia VR combina la narración con elementos interactivos. 
La narrativa se desarrolla a través de los detalles del entorno, el  sonido y los testimonios de ex-prisioneros, sumergen al usuario en la atmósfera emocional y psicológica de la prisión. 
La interactividad permite al usuario explorar la celda a su propio ritmo, creando una sensación de control mientras se esta en el aislamiento en un lugar pequeño. 
La combinación de audio, señales visuales y movimiento involucra múltiples sentidos sensoriales, reforzando la empatía y la comprensión de la narrativa. 
En conjunto, la pieza demuestra cómo la tecnología inmersiva  mejora la narración periodística al fusionar reportajes con experiencias inmersivas.`
  }
};

let isEnglish = true;

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

const textosTabs = {
  "tab-estetica": { en: "Visual Aesthetics", es: "Estética Visual" },
  "tab-ocularizacion": { en: "Ocularization", es: "Ocularización" },
  "tab-relato": { en: "Story Structure", es: "Estructura del Relato" },
  "tab-interaccion": { en: "Interaction", es: "Interacción" },
  "tab-sonido": { en: "Sound", es: "Sonido" },
  "tab-protagonista": { en: "Protagonist", es: "Protagonista" }
};

// Contenido de cada tab
const textosTabsContenido = {
  "tab-estetica": { en: "This is a computer-generated 3D experience of a small prison cell. It is set in a dark environment with muted colors to convey a sense of isolation, making the user feel the claustrophobia of the prison, combined with the narrative of former prisoners.", 
    es:"Esta es una experiencia 3D generada por computadora de una pequeña celda de prisión. Se mantiene en un ambiente oscuro y con colores apagados para transmitir la sensación de aislamiento, haciendo que el usuario sienta la claustrofobia de la prisión, junto con la narrativa de ex-prisioneros." },
  "tab-ocularizacion": { en: "The experience is in first person, placing the user directly inside the cell and allowing them to feel the perspective and sense of isolation. This first-person view makes the experience more immersive and emotionally engaging.", 
    es: "La experiencia es en primera persona y sitúa al usuario directamente dentro de la celda, permitiéndole experimentar la perspectiva y la sensación de aislamiento. Esta visión en primera persona hace que la experiencia sea más inmersiva y emocionalmente intensa." },
  "tab-relato": { en: "This experience has a linear narrative structure, following a chronological order. The user observes and goes through a prisoner’s routine as it happens in real life, creating a sense of repetition and monotony.", 
    es: "Esta experiencia tiene una estructura de relato lineal, ya que sigue un orden cronológico. El usuario observa y atraviesa la rutina de un prisionero tal como ocurre en la vida real, generando una sensación de repetición y monotonía." },
  "tab-interaccion": { en: "The user can explore the cell, interact with certain objects, and hear environmental sounds, enhancing the immersive experience.", 
    es: "El usuario puede explorar la celda, interactuar con algunos objetos y escuchar los sonidos del entorno, lo que refuerza la inmersión en la experiencia." },
  "tab-sonido": { en: "Ambient sounds and ex-prisoner dialogues enhance the sense of isolation and deepen the user’s immersion.", 
    es: "El sonido ambiental y los diálogos de los ex-prisioneros refuerzan la atmósfera de aislamiento y aumentan la inmersión del usuario." },
  "tab-protagonista": { en: "The user is the protagonist, experiencing the cell in first person and feeling the pressure and isolation it entails.", 
    es: "El usuario es el protagonista de la experiencia, viviendo la celda en primera persona y sintiendo la presión y el aislamiento que esto conlleva." }
};

// Función para actualizar los botones de tabs
function updateTabButtons() {
  tabButtons.forEach(btn => {
    const target = btn.dataset.target;
    btn.textContent = isEnglish ? textosTabs[target].en : textosTabs[target].es;
  });
}

// Función para actualizar los contenidos
function updateLanguage() {
  // Títulos
  document.getElementById("titulo-principal").textContent = isEnglish ? "Interactive Experience Sheet" : "Ficha de la Experiencia Interactiva";
  document.getElementById("titulo-video").textContent = isEnglish ? "Experience Video" : "Video de la Experiencia";
  document.getElementById("titulo-medio").textContent = "The Guardian";
  document.getElementById("titulo-plot").textContent = isEnglish ? "Plot" : "Argumento";
  document.getElementById("titulo-reflexion").textContent = isEnglish ? "Final Reflection" : "Reflexión Final";

  // Etiquetas
  document.getElementById("nombre-label").textContent = isEnglish ? "Name:" : "Nombre:";
  document.getElementById("anio-label").textContent = isEnglish ? "Year of creation:" : "Año de creación:";
  document.getElementById("medio-label").textContent = isEnglish ? "Media:" : "Medio:";
  document.getElementById("formato-label").textContent = isEnglish ? "Format:" : "Formato:";
  document.getElementById("url-label").textContent = "URL:";
  document.getElementById("url").textContent = isEnglish ? "View experience" : "Ver experiencia";

  // Valores ficha
  document.getElementById('nombre').textContent = datos.nombre;
  document.getElementById('anio').textContent = datos.anio;
  document.getElementById('medio').textContent = isEnglish ? datos.medio.en : datos.medio.es;
  document.getElementById('formato').textContent = datos.formato;
  document.getElementById('url').href = datos.url;

  // Contenidos principales
  document.getElementById("argumento").textContent = isEnglish ? datos.argumento.en : datos.argumento.es;
  document.getElementById("reflexion").textContent = isEnglish ? datos.reflexion.en : datos.reflexion.es;
  document.getElementById("medio-info").textContent = isEnglish ? datos.medioInfo.en : datos.medioInfo.es;

  // Botón experiencia
  document.getElementById("boton-experiencia").textContent = isEnglish ? "Go to the Experience" : "Ir a la Experiencia";

  // Tabs
  updateTabButtons();
  tabPanels.forEach(panel => {
    const id = panel.id;
const panelContenido = panel.querySelector(".panel-contenido p");
if(panelContenido) {
  panelContenido.textContent = isEnglish ? textosTabsContenido[id].en : textosTabsContenido[id].es;
}  });
}

// Tabs click
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

// Toggle show/hide
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);


    target.classList.toggle('mostrar');
    target.classList.toggle('oculto');

    btn.textContent = target.classList.contains('mostrar')
      ? (isEnglish ? `Hide ${btn.previousElementSibling.textContent}` : `Ocultar ${btn.previousElementSibling.textContent}`)
      : (isEnglish ? `Show ${btn.previousElementSibling.textContent}` : `Mostrar ${btn.previousElementSibling.textContent}`);


    if(targetId === "medio-info") target.textContent = isEnglish ? datos.medioInfo.en : datos.medioInfo.es;
    if(targetId === "argumento") target.textContent = isEnglish ? datos.argumento.en : datos.argumento.es;
    if(targetId === "reflexion") target.textContent = isEnglish ? datos.reflexion.en : datos.reflexion.es;
  });
});

// Cambio de idioma
const langBtn = document.getElementById("toggleLang");
langBtn.addEventListener("click", () => {
  isEnglish = !isEnglish;
  updateLanguage();
  langBtn.textContent = isEnglish ? "🌐 Español" : "🌐 English";
});

// Audio
const audio = document.getElementById('audio');
document.getElementById('playAudio').addEventListener('click', () => audio.play());
window.addEventListener('load', () => audio.play().catch(err => console.log('Autoplay blocked', err)));

// Inicializar contenido
updateLanguage();

function iniciarSlider() {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(slider => {
    let slides = slider.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 5000); // cambia cada 5 segundos
  });
}

document.addEventListener("DOMContentLoaded", iniciarSlider);
