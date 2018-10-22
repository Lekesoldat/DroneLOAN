/*
 FILE NAME: scripts/drones.js
 WRITTEN BY: Magnus.
 WHEN: October 2018
 PURPOSE: Store information about each drone. Information will be used to render a drone specific page.
 */

import * as Spark from './spark.js';
import * as Flare from './flare.js';

const drones = [
  {
    id: 0,
    images: [
      {
        src: './img/DRONENAVN.jpg',
        alt: 'First image'
      },
      {
        src: './img/DRONENAVN.jpg',
        alt: 'Second image'
      },
      {
        src: './img/DRONENAVN.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Spark',
    description: 'Very.',
    specs: ['Spec one', 'Spec two', 'Spec three']
  },
  {
    id: 1,
    images: [
      {
        src: './img/DRONENAVN.jpg',
        alt: 'First image'
      },
      {
        src: './img/DRONENAVN.jpg',
        alt: 'Second image'
      },
      {
        src: './img/DRONENAVN.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Mavic Air',
    description: 'Interesting.',
    specs: ['Spec one', 'Spec two', 'Spec three']
  },
  {
    id: '..',
    images: [
      {
        src: './img/DRONENAVN.jpg',
        alt: 'First image'
      },
      {
        src: './img/DRONENAVN.jpg',
        alt: 'Second image'
      },
      {
        src: './img/DRONENAVN.jpg',
        alt: 'Third image'
      }
    ],
    name: 'Parrot Bepop 2',
    description: 'Description.',
    specs: ['Spec one', 'Spec two', 'Spec three']
  }
];

// Grabs query parameters
const params = new URLSearchParams(document.location.search);
const id = params.get('id');

// Loop through the drones array and find the first element where ID matches.
const drone = drones.find(drone => drone.id == id);

// If ID is valid
if (drone) {
  // 
  Flare.fill(
    // Root
    document.getElementById('content'),
    
    // Mapping
    {
      title: drone.name,
      about: drone.description,

      // <li><img></li>
      images: drone.images.map(image => Spark.createElement(
        'li',
        null,
        [
          Spark.createElement(
            'img',
            {
              src: image.src,
              alt: image.alt
            },
            null
          )
        ]
      )),

      // <li></li>
      specs: drone.specs.map(spec => Spark.createElement(
        'li',
        null,
        [
          spec
        ]
      ))
    }
  );
}