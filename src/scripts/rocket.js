/*
 FILE NAME: scripts/rocket.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: Rocket: A Library for simplifying creation of HTML DOM-elements. 
 */

/* 
Returns a DOM element with the attribute(s) and children set.
createElement(
  'a',
  {
    href: "www.google.com",
    target: '_blank'
  },
  [
    createElement(
      'p',
      {
        innerText: 'Google'
      },
      null
    )
  ]
)

--> 

<a href="www.google.com" target="_blank"><p>Google.com</p></a>
*/

export function createElement(tagName, attributes, children) {
  const element = document.createElement(tagName);

  // Copies all properties from attributes{key:value} to element
  Object.assign(element, attributes);

  // If children provided
  if (children) {

    // Iterate children and append to element
    for (const child of children) {
      element.appendChild(child);
    }
  }

  return element;
}

// Appends the element to the end of root (container)
export const render = (root, element) => {
  root.appendChild(element);
};

// Test
render(
  document.getElementById('navigation'),
  createElement(
    'ol',
    null,
    [createElement(
      'li',
      {innerText: 'Hei'},
      null
    )]
  )
);