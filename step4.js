var https = require('https');

function getHTML (options, callback) {
    https.get(options, function (response) {

    let output = ''

    response.setEncoding('utf8');
    response.on('error', function() {
      console.log(`There's an error`);
    });
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      output += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      callback(output);
    });
  });
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {

}