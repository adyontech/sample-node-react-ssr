var replace = require('replace');
var fs = require('fs');
var path = require('path');

function Plugin(options) {
  this.options = options || {};
}

Plugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('done', function(compilation) {
    var jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/manifest.json')));
    var key;
    var regex;
    var replacement;
    for (key in jsonData) {
      if (key.indexOf('js') !== -1) {


        regex = new RegExp(key.split('.')[0] + "\.[a-zA-Z0-9_]*\.[a-z]*\.js(\.gz)?");
        var jsonDataKeyArr = jsonData[key].split('/');
        replacement = jsonDataKeyArr[jsonDataKeyArr.length - 1];
        if (self.options.type === "prod") {

          try {
            fs.statSync(path.join(__dirname, ('../../scripts/' + replacement + '.gz'))).isFile();
            replacement = replacement + ".gz";
            replace({
              regex: regex,
              replacement: replacement,
              paths: [path.join(__dirname, '../../views')],
              recursive: true,
              silent: true
            });
          } catch (err) {
            replacement = replacement;
            replace({
              regex: regex,
              replacement: replacement,
              paths: [path.join(__dirname, '../../views')],
              recursive: true,
              silent: true
            });
          }
        } else {
          replace({
            regex: regex,
            replacement: replacement,
            paths: [path.join(__dirname, '../../views')],
            recursive: true,
            silent: true
          });
        }
      } else if (key.indexOf('css') !== -1) {
        regex = new RegExp(key.split('.')[0] + "\.*[a-zA-Z0-9_]*\.css(\.gz)?");
        var jsonDataKeyArr = jsonData[key].split('/');
        replacement = jsonDataKeyArr[jsonDataKeyArr.length - 1];
        if (self.options.type === "prod") {

          try {
            fs.statSync(path.join(__dirname, ('../../public/stylesheets/' + replacement + '.gz'))).isFile();
            replacement = replacement + ".gz";
            replace({
              regex: regex,
              replacement: replacement,
              paths: [path.join(__dirname, '../../views')],
              recursive: true,
              silent: true
            });
          } catch (err) {
            replacement = replacement;
            replace({
              regex: regex,
              replacement: replacement,
              paths: [path.join(__dirname, '../../views')],
              recursive: true,
              silent: true
            });
          }
        } else {
          replacement = replacement;
          replace({
            regex: regex,
            replacement: replacement,
            paths: [path.join(__dirname, '../../views')],
            recursive: true,
            silent: true
          });
        }
      }
    }
  });

}

module.exports = Plugin;