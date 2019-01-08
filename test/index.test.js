const readPkg = require('read-pkg');
const writePkg = require('write-pkg');

const pkgField = require('../index');

const defaultPackageContent = { name: 'test' };

function createPackageJson() {
  writePkg.sync(__dirname, defaultPackageContent);
}

function testForFields(fields) {
  pkgField.addField(fields, __dirname);

  const expected = Object.assign(defaultPackageContent, fields);
  const result = readPkg.sync({ cwd: __dirname, normalize: false });

  expect(result).toEqual(expected);
}

describe('pkg-field', function() {
  beforeEach(function() {
    createPackageJson();
  });

  it('should add field to package.json', function() {
    testForFields({ '__field_name__': '__field_value__' });
  });

  it('should add nested field to package.json', function() {
    testForFields({
      '__nested_field_name__': {
        '__field_name__': '__field_value__'
      }
    });
  });
});