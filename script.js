function moveSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const scrollAmount = 340;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
