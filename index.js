var _ = require('underscore');

module.exports = function(tag, attributes, children) {
  var elem = document.createElement(tag);
  console.log(tag);

  _.each(attributes, function(val, key) {
    console.log("set attribute " + key + " to " + val);
    elem.setAttribute(key, val);
  });

  _.each(children, function(child) {
    if(typeof child === 'string') {
      elem.appendChild(document.createTextNode(child));
    }
    else {
      console.log(child);
      elem.appendChild(child);
    }
  });

  return elem;
}
