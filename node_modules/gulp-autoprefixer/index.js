var map = require('map-stream');
var prefix = require('autoprefixer');

module.exports = function(){
  'use strict';

  var opts = arguments.length > 0 ? [].slice.call(arguments, 0) : ['> 1%','last 2 versions','ff 17','opera 12.1'];


  return map(function(file,callback){
  	file.contents = new Buffer(prefix(opts).process(String(file.contents)).css);
  	callback(null,file)
  });

};
