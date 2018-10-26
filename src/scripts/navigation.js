/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus L. Holtet, Øyvind, Carl
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
        src: './img/droneIconWhite.png',
        alt: 'Drone Icon.',
        width: 30,
        heigth: 30
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
function renderListItem(route) {
  return Spark.createElement(
    'li',
    /* HUSK Å FJERNE DETTE */
    {
      className: 'selectedTab'
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
    routes.map(route => renderListItem(route))
  );
}

export default renderList(routes);