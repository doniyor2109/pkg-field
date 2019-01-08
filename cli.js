// #!/usr/bin/env node

const pkgField = require('./index');

const [name, value] = process.argv.slice(2);
let values = { [name]: value };

if (~name.indexOf('.')) {
  name.split('.').reduce(function(obj, key, index, arr) {
    return (
      obj[key] = ~(index-arr.length) ? value: {},
      obj
    );
  }, {});
}

pkgField.addField(values);