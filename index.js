var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    console.log(response)
    response.setEncoding('utf8');
    response.on('error', function() {
      console.log(`There's an error`);
    });
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log(`Data received: ${data}\nLength: data.length`);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTMLChunks();