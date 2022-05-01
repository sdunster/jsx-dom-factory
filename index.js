import _ from 'underscore';

export default function createElement(tag, attributes, ...children) {
  const elem = document.createElement(tag);

  _.each(attributes, (val, key) => {
    elem.setAttribute(key, val);
  });

  // in-order traversal of sub-arrays
  function handleChild(child) {
    if (child.constructor === Array) {
      _.each(child, (c) => {
        handleChild(c);
      });
    } else if (typeof child === 'string') {
      elem.appendChild(document.createTextNode(child));
    } else {
      elem.appendChild(child);
    }
  }

  // children could be a single argument that is an Array or it could be
  // multiple arguments depending on the JSX version
  _.each(children, (child) => {
    handleChild(child);
  });

  return elem;
}
