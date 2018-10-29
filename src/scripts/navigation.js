/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus L. Holtet, Øyvind, Carl
 WHEN: October 2018
 PURPOSE: Orbit: A self-made library extension of Spark which handles navigation-bar rendering.
 */

import * as Spark from './spark.js';

// Grabs query parameters
const params = new URLSearchParams(document.location.search);
const tab = params.get('tab');

const routes = [
  {
    path: './index.html?tab=0',
    title: Spark.createElement(
      'img',
      {
        src: './img/droneIconWhite.png',
        alt: 'Drone Icon.',
        width: 30,
        heigth: 30
      },
      null
    )
  },
  {
    path: './drones.html?tab=1',
    title: 'OUR DRONES'
  },
  {
    path: './videos.html?tab=2',
    title: 'VIDEO GALLERY'
  },
  {
    path: './contact.html?tab=3',
    title: 'CONTACT'
  },
  {
    path: './about.html?tab=4',
    title: 'ABOUT US'
  }
];

// Creates a clickable element, specifies where it leads and its content (children)
function renderLink( route ) {
  return Spark.createElement(
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
function renderListItem(route, index) {
  // Renders which page is active
  const status = ((index == tab) ? 'activeTab' : null);

  return Spark.createElement(
    'li',
    {
      className: status
    },
    [
      renderLink(route)
    ]
  );
}

// Values is an array. Calls .render() on each item in values[]
function renderList(routes) {
  return Spark.createElement(
    'ul',
    {
      className: 'container'
    },
    routes.map((route, index) => renderListItem(route, index))
  );
}

export default renderList(routes);
