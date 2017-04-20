var path = require('path');

module.exports = {
  dev: {
    outputPath: path.resolve(__dirname, '../static'),
    outputPublicPath: '/'
  },
  prod: {
    outputPath: path.resolve(__dirname, '../../public/assets/'),
    outputPublicPath: '/assets/'
  }
}