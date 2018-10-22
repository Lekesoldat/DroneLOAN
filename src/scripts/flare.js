/*
 FILE NAME: scripts/flare.js
 WRITTEN BY: Magnus L. Holtet.
 WHEN: October 2018
 PURPOSE: ☄️ Flare: A self-made TEMPLATE library to render a drone selcted on Our Drones-page.
*/

/**
 * Depth first search. Traverse through all elements in the HTML-tree and invoke callback() on that element.
 * @param {HTMLElement} element 
 * @param {Function} callback 
 */
function traverse(element, callback) {
  for (const child of element.children) {
    traverse(child, callback);
  }
  
  callback(element);
}

/**
 * @param {HTMLElement} parent 
 * @param {Array | HTMLElement | String} children 
 */
function appendChildren(parent, children) {

  // For each child in the Array, call appendChildren().
  if (children instanceof Array) {
    children.forEach(child => appendChildren(parent, child));
  
  // If an HTML-element - append to parent
  } else if (children instanceof HTMLElement) {
    parent.appendChild(children);

  // If a String, set inner text
  } else {
    parent.innerText = children;
  }
}

/**
 * @param {HTMLElement} root 
 * @param {Obejct} mapping works as a dictionary 
 */
export function fill(root, mapping) {
  // Pattern for matching {( )}
  const pattern = /{{\s*(\w*)\s*}}/;

  traverse(root, function(element) {
    // If you reach deepest element
    if (element.children.length == 0) {
      
      // Array with the elements matching
      const match = element.innerText.match(pattern);

      if (match) {
        // Clear innerText before appending
        element.innerText = '';

        // match[1] will be the key in the map
        appendChildren(element, mapping[match[1]]);
      }
    }
  });
}