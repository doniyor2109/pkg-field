const writePkg = require('write-pkg');
const readPkg = require('read-pkg');

function addField(values, dir) {
  dir = dir || process.cwd();
  writePkg.sync(dir, Object.assign(readPkg.sync({ cwd: dir, normalize: false }), values));
}

module.exports.addField = addField;