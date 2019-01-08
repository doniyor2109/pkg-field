// #!/usr/bin/env node

const pkgField = require('./index');

const [name, value] = process.argv.slice(2);
let values = { [name]: value };

if (name.indexOf('.') > -1) {
  values = {};
  name.split('.').reduce(function(obj, key, index, arr) {
    if (arr.length - 1 === index) {
      obj[key] = value;
    } else {
      obj[key] = {};
    }
    return obj[key];
  }, values);
}
console.log(values);
pkgField.addField(values);