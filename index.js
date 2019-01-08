const writePkg = require('write-pkg');
const readPkg = require('read-pkg');
const merge = require('merge');

function addField(values, dir) {
  dir = dir || process.cwd();
  writePkg.sync(dir, merge.recursive(readPkg.sync({ cwd: dir, normalize: false }), values));
}

module.exports.addField = addField;