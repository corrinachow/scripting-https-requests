var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  const output = html.replace(/a/gi, '4').replace(/e/gi, '3').replace(/l/gi, '1').replace(/o/gi, '0').replace(/s/gi, '5').replace(/t/gi, '7').replace(/ck/gi, 'x').replace(/er/gi, '0r').replace(/you/gi, 'j00');
  console.log(output)
  return output;
}

console.log(getHTML(requestOptions, print1337));
