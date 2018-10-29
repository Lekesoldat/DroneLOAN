/*
 FILE NAME: scripts/drones.js
 WRITTEN BY: Magnus.
 WHEN: October 2018
 PURPOSE: Render the drone specific page based on which drone was clicked on 'Our Drones'.
 */

import * as Spark from './spark.js';
import * as Flare from './flare.js';
import drones from './droneInfo.js';

// Grabs query parameters
const params = new URLSearchParams(document.location.search);
const id = params.get('id');

// Loop through the drones array and find the first element where ID matches.
const { name, description, images, specs } = drones.find(drone => drone.id == id);

// Name will not be blank if a valid drone is found.
if (name != '') {
  Flare.fill(
    // Root
    document.getElementById('content'),
    
    // Mapping
    {
      title: name,
      about: description,

      bigImage: renderCarouselElement(images),
      miniImage: renderMiniSection(images),

      // <li></li>
      specs: specs.map(spec => Spark.createElement(
        'li',
        null,
        [
          Spark.createElement(
            'p',
            null,
            [
              spec
            ]
          )
        ]
      ))
    }
  );
}

/* Image carousel scripts */

// Used for creation of the big image in the carousel
function renderImage(image) {
  return Spark.createElement(
    'img',
    {
      src: image.src,
      alt: image.alt
    },
    null
  );
}

/* Returns the following HTML
  <div class="mySlides carousel">
    <img src="image.src" alt="image.alt">
  </div>
*/
function renderBigImageDiv(image) {
  return Spark.createElement(
    'div',
    {
      className: 'mySlides carousel fade'
    },
    [
      renderImage(image)
    ]
  );
}

/* Returns the following HTML
  <div class="col-12">
    <div class="mySlides carousel">
      <img src="path">
    </div>
  </div>
*/
function renderCarouselElement(images) {
  return Spark.createElement(
    'div',
    {
      className: 'col-12'
    },
    images.map(image => renderBigImageDiv(image))
  );
}

/* Returns the following HTML
  <img class="blur cursor" src="image.path" alt="image.alt" onclick="currentSlide(index + 1)">
*/
function renderMiniImage(image, index) {
  return Spark.createElement(
    'img',
    {
      src: image.src,
      alt: image.alt,
      className: 'blur cursor',
      onclick: () => currentSlide(index)
    },
    null
  );
}

/* Creates
  <div class="row">

    <div class="col-4 mini-image">
      <img class="blur cursor" src="image.path" alt="image.alt" onclick="currentSlide(index + 1)">
    </div>

    .
    .
    .

*/
function renderMiniSection(images) {
  return Spark.createElement(
    'div',
    {
      className: 'row'
    },
    images.map((image, index) => Spark.createElement(
      'div',
      {
        className: 'col-4 mini-image'
      },
      [
        renderMiniImage(image, index)
      ]
    ))
  );
}

/*  - - - - - - - - - - - CAROUSEL SCRIPT - - - - - - - - - - - */
let imageIndex = 0;
const currentSlide = n => showSlides(imageIndex = n);
const slides = document.getElementsByClassName('mySlides');

const showSlides = n => {
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
  slides[imageIndex].style.display = 'block';
  miniImages[imageIndex].className += ' active';
};

const carousel = () => {
  showSlides(imageIndex);
  imageIndex++;

  if (imageIndex > slides.length - 1) {
    imageIndex = 0;
  }

  // Switch image every 8th second
  setTimeout(carousel, 4000);
};

// Start the carousel
carousel();

/*  - - - - - - - - - - - FORM SCRIPT - - - - - - - - - - - */
const form = document.getElementById('requestRental');
const fakeRequest = evt => {
  alert('⚡️' + '\tRequest sent!\n' + '⏳' + '\tWe will reach back to you shortly.');
  evt.preventDefault();
};

form.addEventListener('submit', fakeRequest, true);