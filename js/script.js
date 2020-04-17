alert("BIENVENIDOS A PSICOLOGÍA");

function confirmacion() {
      return confirm("Quieres ir a la pagina de enfermedades?")
}
$('.carousel').carousel({
    interval: 800
  })  
let img = document.querySelectorAll(".img");
  
img[0].style.display = "initial";
  
img.addEventListener('click', () => {
      this.changeSlide();
});