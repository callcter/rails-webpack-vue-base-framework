var webpack = require("webpack");
var prodConfig = require('./webpack.prod.config');
webpack(prodConfig, function(err, stats){
  process.stdout.write(stats.toString());
})
