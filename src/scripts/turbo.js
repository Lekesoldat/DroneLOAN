/*
 FILE NAME: scripts/turbo.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: Turbo: A self-made library extension of Rocket which handles navigation-bar rendering.
 */

import * as Rocket from './rocket.js';
import routes from './routes.js';

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
    null,
    routes.map(route => renderListItem(route))
  );
}

/*
Takes in routes array.
*/
export function renderRoutes(routes) {
  return renderList(routes);
}