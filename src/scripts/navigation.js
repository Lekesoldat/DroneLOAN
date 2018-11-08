/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus, Øyvind, Carl
 WHEN: October 2018
 PURPOSE: Orbit: A self-made library extension of Spark which handles navigation-bar rendering.
 */

import * as Spark from './spark.js';

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
    path: './about.html?',
    title: 'ABOUT US'
  }
];

// Creates a clickable element, specifies where it leads and its content (children)
function renderLink( {path, title}, index ) {
  return Spark.createElement(
    'a',
    {
      // Template literals
      href: `${path}?tab=${index}`
    },
    [
      title
    ]
  );
}

function renderListItem(route, index, tab) {
  // Renders which page is active
  const props = ((index != 0 && index == tab) ? { className: 'activeTab' } : null);
  
  return Spark.createElement(
    'li',
    props,
    [
      renderLink(route, index)
    ]
  );
}

function renderList(routes) {
  // Grabs query parameters
  const params = new URLSearchParams(document.location.search);
  const tab = params.get('tab');

  return Spark.createElement(
    'ul',
    {
      className: 'container'
    },
    routes.map((route, index) => renderListItem(route, index, tab))
  );
}

export default renderList(routes);
