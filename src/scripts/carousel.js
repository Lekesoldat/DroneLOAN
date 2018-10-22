/*
 FILE NAME: scripts/carousel.js
 WRITTEN BY: Magnus.
 WHEN: October 2018
 PURPOSE: Display a slideshow of images.
 */

let imageIndex = 1;

// Change slide
const plusSlides = n => showSlides(imageIndex += n);
const currentSlide = n => showSlides(imageIndex = n);

const showSlides = n => {
  // Grab elements from page
  const slides = document.getElementsByClassName('mySlides');
  const miniImages = document.getElementsByClassName('blur');

  // Hide all slides
  for (let slide of slides) {
    slide.style.display = 'none';
  }

  // Make all miniimages inactive
  for (let image of miniImages) {
    image.className = image.className.replace(' active', '');
  }

  // Display first image and set active
  slides[imageIndex - 1].style.display = 'block';
  miniImages[imageIndex - 1].className += ' active';
};

showSlides(imageIndex);
