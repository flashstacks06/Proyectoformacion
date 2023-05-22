// Obtener todas las imágenes del slider
const sliderImages = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;
// Función para cambiar la imagen actual y ocultar las demás
function changeImage() {
  // Ocultar todas las imágenes
  sliderImages.forEach(image => {
    image.style.display = 'none';
  });
  // Mostrar la imagen actual
  sliderImages[currentImageIndex].style.display = 'block';
  // Incrementar el índice para mostrar la siguiente imagen
  currentImageIndex++;
  // Reiniciar el índice si llega al final del array
  if (currentImageIndex >= sliderImages.length) {
    currentImageIndex = 0;
  }
  // Llamar a la función de cambio de imagen cada 3 segundos (ajusta este valor según tus necesidades)
  setTimeout(changeImage, 3000);
}
// Iniciar el cambio de imagen cuando la página se cargue completamente
window.addEventListener('load', changeImage);