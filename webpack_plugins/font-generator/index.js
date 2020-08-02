var getFileList = require("./getFileList");
var webfontsGenerator = require("webfonts-generator");
var rimraf = require("rimraf");

function Plugin(options) {
  this.options = options || {};
}

Plugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin("compile", function(compilation) {
    rimraf("content/fonts", function(err) {
      if (!err) {
        var svgFiles = getFileList("content/icons");
        webfontsGenerator(
          {
            files: svgFiles,
            dest: "content/fonts",
            cssFontsPath: "/content/fonts/",
          },
          function(error) {
            if (error) console.log("Fail!", error);
            else console.log("Done!");
          },
        );
      }
    });
  });
};

module.exports = Plugin;
