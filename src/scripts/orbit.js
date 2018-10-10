/*
 FILE NAME: scripts/orbit.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: Orbit: A self-made library extension of Rocket which handles navigation-bar rendering.
 */

import * as Rocket from './rocket.js';

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

/**
 * 
 * @param {any[]} routes the array with paths to the different files.
 */
export function renderRoutes(routes) {
  return renderList(routes);
}