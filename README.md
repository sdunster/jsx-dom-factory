# jsx-dom-factory
Factory that uses `document.createElement()` for JSX-transpiled elements.

# Usage
Install [jsx-transform](https://www.npmjs.com/package/jsx-transform):
`npm install --save jsx-transform`

Configure it according to the documentation and choose a factory name like
"DOM".

Then at the top of each file containing JSX import this module:

```
var DOM = require('jsx-dom-factory');
```

You can then factory HTML elements super-easily:

```
var name = "Sam";
var element = <div>Hello {name}!</div>;
container.appendChild(element);
```
```
var element = (
  <ul>
    <li style="font-weight:bold">Test 1</li>
    <li>Test 2</li>
  </ul>
);
$('#container').append(element);
```

