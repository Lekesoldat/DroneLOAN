/*
 FILE NAME: scripts/footer.js
 WRITTEN BY: Magnus, Andreas
 WHEN: October 2018
 PURPOSE: For cleaner code. Generates footer based on fields provided.
 */

import * as Spark from './spark.js';

// To be displayed in the footer
const fields = [
  Spark.createElement(
    'a',
    {
      href: 'mailto:contact@droneloan.com',
      className: 'footerLink'
    },
    'contact@droneloan.com', 
  ),
  Spark.createElement(
    'a', 
    {
      href: 'https://goo.gl/maps/dAo6CUxhBUD2',
      className: 'footerLink'
    },
    'Høgskoleringen 1, 7491 Trondheim', 
  ),
  Spark.createElement(
    'a',
    {
      href: 'https://validator.w3.org/check/referer',
      className: 'footerLink'
    },
    '&copy; DroneLOAN 2018'
  )
];

// Create the footer.
export default Spark.createElement(
  'ul',
  {
    className: 'container'
  },
  ...fields.map(field => Spark.createElement(
    'li', 
    null, 
    field
  ))
);