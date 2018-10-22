/*
 FILE NAME: scripts/droneInfo.js
 WRITTEN BY: Magnus, Mathias
 WHEN: October 2018
 PURPOSE: Store information about each drone. Will be used in 'drones.js'
 */

export default [
  {
    id: 0,
    images: [
      {
        src: 'https://www.w3schools.com/howto/img_woods_wide.jpg',
        alt: 'First image'
      },
      {
        src: 'https://www.w3schools.com/howto/img_5terre_wide.jpg',
        alt: 'Second image'
      },
      {
        src: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
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