const scroller = document.querySelector('.scroller');
const main = document.querySelector('main');
const cardCount = 5; // Cambia este número si tienes más o menos tarjetas

let currentIndex = 0;

// Ajusta el scroll automáticamente cada 3 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % cardCount;
  main.dataset.activeIndex = currentIndex;

  // Scroll al siguiente slide de forma suave
  scroller.scrollTo({
    left: scroller.clientWidth * currentIndex,
    behavior: 'smooth'
  });
}, 600);

// Sincroniza si hay scroll manual
scroller.addEventListener('scrollsnapchange', (event) => {
  currentIndex = Math.round(scroller.scrollLeft / scroller.clientWidth);
  main.dataset.activeIndex = currentIndex;
});


setTimeout(() => {
  window.location.href = "https://antonio-mora003.github.io/servicio/";
}, 2900); // 4 segundos


