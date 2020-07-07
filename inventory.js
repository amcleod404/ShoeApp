var shoeObject = {};

var browserify = require('browserify');
var path = require('path');
var fs = require('fs');

document.querySelector('#submit-button').addEventListener('click', (e) => {
  submitData(
    document.getElementById('name').value,
    document.getElementById('price').value
  );
});

function submitData(name, price) {
  var files = ['./Scripts/test/x.js', './Scripts/test/y.js'];
  var outputDirectory = './wwwroot';

  fs.mkdir(outputDirectory, function (err) {
    if (err) {
      throw err;
    }

    var b = browserify(files);

    b.plugin('factor-bundle', {
      outputs: ['output/x.js', 'output/y.js'],
    });

    b.bundle().pipe(fs.createWriteStream(path.join(outputdir, './common.js')));
  });
}
