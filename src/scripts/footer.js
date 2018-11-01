/*
 FILE NAME: scripts/footer.js
 WRITTEN BY: Magnus.
 WHEN: October 2018
 PURPOSE: For cleaner code.
 */

import * as Spark from './spark.js';

// To be displayed in the footer
const fields = [
  'contact@droneloan.com', 
  'Høgskoleringen 1, 7491 Trondheim', 
  Spark.createElement(
    'a',
    {
      href: 'https://validator.w3.org/check/referer',
      id: 'validate'
    },
    [
      '&copy; DroneLOAN 2018'
    ]
  )
];

// Create the footer.
export default Spark.createElement(
  'ul',
  {
    className: 'container'
  },
  fields.map(field => Spark.createElement(
    'li', 
    null, 
    [
      field
    ]
  ))
);