function appendChild(element, child) {
  if (child) {
    if (child && child instanceof Node) {
      element.appendChild(child);
    } else {
      element.innerText = child;
    }
  }
}

function appendChildren(element, children) {
  children.forEach(child => appendChild(element, child));
}

export function clear(root) {
  while (root.lastChild) {
    root.lastChild.remove();
  }
}

export function render(root, element) {
  root.appendChild(element);
}

export function createElement(tagName, attributes, children) {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);

  if (children) {
    if (children.constructor === Array) {
      appendChildren(element, children);
    } else {
      appendChild(element, children);
    }
  }

  return element;
}