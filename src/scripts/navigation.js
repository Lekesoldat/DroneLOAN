/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus, Øyvind, Carl
 WHEN: October 2018
 PURPOSE: Orbit: A self-made library extension of Spark which handles navigation-bar rendering.
 */

import * as Spark from './spark.js';

// Grabs query parameters
const params = new URLSearchParams(document.location.search);
const tab = params.get('tab');

const routes = [
  {
    path: './index.html',
    title: Spark.createElement(
      'img',
      {
        src: './img/misc/droneIconWhite.png',
        alt: 'Drone Icon.',
        width: 30
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
function renderLink( {path, title} ) {
  return Spark.createElement(
    'a',
    {
      href: path
    },
    [
      title
    ]
  );
}

// Create a list item with an whatever as content.
function renderListItem(route, index) {
  // Renders which page is active
  const props = ((index == tab) ? { className: 'activeTab' } : null);
  
  return Spark.createElement(
    'li',
    props,
    [
      renderLink(route)
    ]
  );
}

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
