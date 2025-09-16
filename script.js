// Insertar datos como antes
const datos = {
  nombre: "6x9: A Virtual Experience of Solitary Confinement",
  anio: "2016",
  medio: "The Guardian",
  formato: "Realidad Virtual / 360°",
  url: "https://www.theguardian.com/world/ng-interactive/2016/apr/27/6x9-a-virtual-experience-of-solitary-confinement#gvr-360",
  argumento: "Esta experiencia en VR recrea lo que significa estar en confinamiento solitario...",
  reflexion: "La capacidad inmersiva de esta experiencia es muy potente..."
};


document.getElementById("nombre").textContent = datos.nombre;
document.getElementById("anio").textContent = datos.anio;
document.getElementById("medio").textContent = datos.medio;
document.getElementById("formato").textContent = datos.formato;
document.getElementById("url").href = datos.url;
document.getElementById("argumento").textContent = datos.argumento;
document.getElementById("reflexion").textContent = datos.reflexion;

// Funcionalidad para todos los botones toggle
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);

    // Mostrar u ocultar contenido
    target.classList.toggle('mostrar');
    target.classList.toggle('oculto');

    // Cambiar texto del botón
    btn.textContent = target.classList.contains('mostrar') ? 
                      `Ocultar ${targetId}` : 
                      `Mostrar ${targetId}`;

    // Hacer scroll suave hasta el contenido
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});