import * as Rocket from './rocket.js';

function renderLink(route) {
  return Rocket.createElement(
    'a',
    {
      href: route.path,
      innerText: route.title,
      onclick: e => e.preventDefault()
    }
  )
}

function renderListItem(render) {
  return Rocket.createElement(
    'li',
    null,
    render()
  );
}

function renderList(values, render) {
  return Rocket.createElement(
    'ul',
    null,
    values.map(render)
  );
}

export function renderRoutes(routes) {
  return renderList(routes, function(route) {
    return renderListItem(function() {
      return renderLink(route);
    });
  });
}
