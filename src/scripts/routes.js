/*
 FILE NAME: scripts/turbo.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: Specifies routes to be used by Turbo.
 */

import * as Rocket from './rocket.js';

// Array with paths to the different pages in the nav bar.
export default [
  {
    path: './index.html',
    title: Rocket.createElement(
      'img', 
      {
        src: './img/droneIcon.png',
        alt: 'Drone Icon.',
        width: 20,
        heigth: 20
      },
      null
    )
  },
  {
    path: './drones.html',
    title: 'OUR DRONES'
  },
  {
    path: './videos.html',
    title: 'VIDEO GALLERY'
  },
  {
    path: './contact.html',
    title: 'CONTACT'
  },
  {
    path: './about.html',
    title: 'ABOUT US'
  }
];
