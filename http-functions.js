var https = require('https');

const functions = {
  printHTML : function printHTML (html) {
  console.log(html);
}
};


module.exports = function getHTML (options, callback) {
  console.log(callback)
  console.log(options, callback);

    https.get(options, function (response) {

    let output = ''


    response.setEncoding('utf8');
    response.on('error', function() {
      console.log(`There's an error`);
    });
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      output += data;
      // console.log(output)
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      if(functions[callback] && (typeof functions[callback]) === 'function') {
        functions[callback](output);
      } else {
        console.log(`Callback doesn't exist`)
      }
    });
  });
}

