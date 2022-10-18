const createElement = (tag, attributes, ...children) => {
  const elem = document.createElement(tag);

  Object.entries(attributes ?? {}).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });

  // in-order traversal of sub-arrays
  const handleChild = (child) => {
    if (child.constructor === Array) {
      child.forEach((c) => {
        handleChild(c);
      });
    } else if (typeof child === 'string') {
      elem.appendChild(document.createTextNode(child));
    } else {
      elem.appendChild(child);
    }
  };

  // children could be a single argument that is an Array or it could be
  // multiple arguments depending on the JSX version
  children.forEach((child) => {
    handleChild(child);
  });

  return elem;
};

export default createElement;
