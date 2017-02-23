const path = require('path');

module.exports = [
  {
    entry: './angular/app.js',
    output: {
      path: path.join(__dirname, 'chrome/js/app'),
      filename: 'bundle.js'
    }
  }
];
