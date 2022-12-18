const path = require("path");

const utils = require('require-all')({
  dirname: path.join(__dirname, "/utils"),
  recursive: true
});

const classes = require('require-all')({
  dirname: path.join(__dirname, "/lib"),
  recursive: true
});

for (let key in classes) {
  for (let module in classes[key]) {
    utils[module] = classes[key][module]
  }
}


module.exports = {
  ...utils
}