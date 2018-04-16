var https = require('https');

function getAndPrintHTML (options) {
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
      console.log(output)
      console.log('Response stream complete.');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)