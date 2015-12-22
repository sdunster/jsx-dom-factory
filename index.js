var _ = require('underscore');

module.exports = function(tag, attributes, children) {
  var elem = document.createElement(tag);

  _.each(attributes, function(val, key) {
    elem.setAttribute(key, val);
  });

  // in-order traversal of sub-arrays
  var handle_child = function(child) {
    if(child.constructor === Array) {
      _.each(child, function(c) {
        handle_child(c);
      });
    }
    else if(typeof child === 'string') {
      elem.appendChild(document.createTextNode(child));
    }
    else {
      elem.appendChild(child);
    }
  };

  // children must be an array so unwrap the first level
  _.each(children, function(child) {
    handle_child(child);
  });

  return elem;
}
