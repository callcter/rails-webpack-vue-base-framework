var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProd = process.env.NODE_ENV === "production";

var cssLang = [
  {
    name: 'css',
    reg: /\.css$/,
    loader: 'css-loader'
  },
  {
    name: 'scss',
    reg: /\.scss$/,
    loader: 'sass-loader'
  }
]

function genLoaders(lang){
  var loaders = ['css-loader', 'postcss-loader'];
  if(lang.name !== 'css'){
    loaders.push(lang.loader);
  }
  if(isProd){
    // 生产环境需要提取 css
    loaders = ExtractTextPlugin.extract({
      use: loaders
    })
  }else{
    // 开发环境需要 vue-style-loader 将 css 提取到页面头部
    loaders.unshift('vue-style-loader');
  }
  return loaders;
}

exports.styleLoaders = function(){
  var output = [];
  cssLang.forEach(lang => {
    output.push({
      test: lang.reg,
      use: genLoaders(lang)
    })
  })
  return output;
}

exports.vueLoaderOptions = function(){
  var options = {
    loaders: {}
  }
  cssLang.forEach(lang => {
    options.loaders[lang.name] = genLoaders(lang);
  })
  return options;
}

