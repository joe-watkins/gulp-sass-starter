var prefix = require('../');
var should = require('should');
var fs = require('fs');
var autoprefixer = require("autoprefixer");
require('mocha');


var testfile = fs.readFileSync("./test/test.css","utf8");

describe('gulp-autoprefixer', function() {
	it('should prefix with defaults', function(done) {
    var stream = prefix();
    var fakeFile = {
      path: "/home/test/file.css",
      shortened: "file.css",
      contents: new Buffer(testfile)
    };


    stream.on('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.path);
      should.exist(newFile.shortened);
      should.exist(newFile.contents);
      newFile.path.should.equal("/home/test/file.css");
      newFile.shortened.should.equal("file.css");
      String(newFile.contents).should.equal(autoprefixer.process(testfile).css);
      done();
    });


    stream.write(fakeFile);
    stream.end();

  });





  it('should prefix with options', function(done) {
    var stream = prefix("last 1 version", "> 1%", "ie 8", "ie 7");
    var fakeFile = {
      path: "/home/test/file.css",
      shortened: "file.css",
      contents: new Buffer(testfile)
    };


    stream.on('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.path);
      should.exist(newFile.shortened);
      should.exist(newFile.contents);
      newFile.path.should.equal("/home/test/file.css");
      newFile.shortened.should.equal("file.css");
      String(newFile.contents).should.equal(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7").process(testfile).css);
      done();
    });


    stream.write(fakeFile);
    stream.end();

  });
});