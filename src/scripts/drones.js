/*
 FILE NAME: scripts/drones.js
 WRITTEN BY: Magnus
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
const drone = drones.find(drone => drone.id == id);

// If a matching drone is found.
if (drone) {
  const { name, description, images, specs } = drone;
  
  Flare.fill(
    // Root
    document.getElementById('content'),
    
    // Mapping
    {
      title: name,
      about: description,

      bigImage: renderCarouselElement(images),
      miniImage: renderMiniSection(images),

      
      specs: renderTable(specs)
    }
  );
}

/* Image carousel scripts */
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

function renderCarouselElement(images) {
  return Spark.createElement(
    'div',
    {
      className: 'col-12'
    },
    images.map(image => renderBigImageDiv(image))
  );
}

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

function renderMiniSection(images) {
  return Spark.createElement(
    'div',
    {
      className: 'row white'
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

/*  - - - - - - - - - - - AUTOMATED CAROUSEL SCRIPT - - - - - - - - - - - */
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
  slides[n].style.display = 'block';
  miniImages[n].className += ' active';
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
  alert('⚡' + '\tRequest sent!\n' + '⏳' + '\tWe will reach back to you shortly.');
  evt.preventDefault();
};

form.addEventListener('submit', fakeRequest, true);


/*  - - - - - - - - - - - GENERATE SPEC TABLE SCRIPT - - - - - - - - - - - */

function renderTable(specs) {
  return Spark.createElement(
    'table',
    {
      id: 'displaySpecs'
    },
    [
      createHeaderRow(specs),
      createDataRow(specs)
    ]
  );
}

function createHeaderRow(specs) {
  return Spark.createElement(
    'tr',
    null,
    Object.keys(specs).map(key => Spark.createElement(
      'th',
      null,
      [
        key
      ]
    ))
  
  );
}

function createDataRow(specs) {
  return Spark.createElement(
    'tr',
    null,
    Object.values(specs).map(spec => Spark.createElement(
      'td',
      null,
      [
        spec
      ]
    ))
  );
}
