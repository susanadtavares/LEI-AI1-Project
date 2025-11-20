const slides = document.querySelectorAll('.slide');
const navbar = document.querySelector('.navbar');
let currentIndex = 0;

//Mostra um slide e esconde os outros
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

//Avança para o próximo slide 
//Retorna ao 1º slide se estiver no último slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

//Muda de slide de 5 em 5 segundos 
setInterval(nextSlide, 5000);

//Expande/Recolhe cada questão do FAQ
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        content.classList.toggle('open');
        header.classList.toggle('open');
    });
});

//Redireciona para a página de cada Distrito
function explorarDistrito() {
    const dropdown = document.getElementById("distritos");
    const selectedValue = dropdown.value;
  
    if (selectedValue) {
      window.location.href = selectedValue;
    } else {
      alert("Por favor, selecione um distrito para conseguir explorar!");
    }
  }