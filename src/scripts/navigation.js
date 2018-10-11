/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: Orbit: A self-made library extension of Rocket which handles navigation-bar rendering.
 */

import * as Rocket from './rocket.js';

const routes = [
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


// Creates a clickable element, specifies where it leads and its content (children)
function renderLink(route) {
  return Rocket.createElement(
    'a',
    {
      href: route.path
    },
    [
      route.title
    ]
  );
}

// Create a list item with an whatever as content.
function renderListItem(route) {
  return Rocket.createElement(
    'li',
    null,
    [
      renderLink(route)
    ]
  );
}

// Values is an array. Calls .render() on each item in values[]
function renderList(routes) {
  return Rocket.createElement(
    'ul',
    {
      className: 'container'
    },
    routes.map(route => renderListItem(route))
  );
}

export default renderList(routes);