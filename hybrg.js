let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Altera a imagem a cada 2 segundos (2000 milissegundos)
}