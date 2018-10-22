/*
 FILE NAME: scripts/spark.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: ⚡️ Spark: A self-made library for simplifying creation of HTML DOM-elements. 
 */

/**
 * Create HTML-element. 
 * @param {string} tagName the type of the HTML element to be created.
 * @param {Object} attributes the attributes passed to the HTML element to be created.
 * @param {any[]} children the children of the HTML element to be created.
 * 
 * @returns The created HTML-element.
 */
export function createElement(tagName, attributes, children) {
  const element = document.createElement(tagName);
  
  // Copies all properties from attributes{key:value} to element
  Object.assign(element, attributes);
  
  // If children provided
  if (children) {
    
    // Iterate children and append to element
    for (const child of children) {
      if (child instanceof HTMLElement) {
        element.appendChild(child);
      } else {
        element.innerHTML = child;
      }
    }
  }
  return element;
}

/**
 * Appends the element to the end of root (container).
 * @param {HTMLElement} root 
 * @param {HTMLElement} element 
 */
export const render = (root, element) => {
  root.appendChild(element);
};

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