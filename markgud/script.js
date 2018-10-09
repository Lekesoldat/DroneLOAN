import * as Rocket from './rocket.js';
import * as Turbo from './turbo.js';
import routes from './routes.js';

Rocket.render(
  document.getElementById('navigation'),
  Turbo.renderRoutes(routes)
);

Rocket.render(
  document.getElementById('content'),
  Rocket.createElement(
    'p',
    null,
    'Lorem ipsum'
  )
);
