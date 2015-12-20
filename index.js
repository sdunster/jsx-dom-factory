var _ = require('underscore');

module.exports = function(tag, attributes, children) {
  var elem = document.createElement(tag);

  _.each(attributes, function(val, key) {
    elem.setAttribute(key, val);
  });

  _.each(children, function(child) {
    if(typeof child === 'string') {
      elem.appendChild(document.createTextNode(child));
    }
    else {
      elem.appendChild(child);
    }
  });

  return elem;
}
