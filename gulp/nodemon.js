/*
  nodemon.js
  ===========
  uses nodemon to run a server, watches for javascript and json changes
*/

var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var config = require('./config.json')

gulp.task('server', function () {
  nodemon({ignore: [config.paths.public + '*', config.paths.public + '*'],
            script: 'server.js',
            ext: 'js, json',
            env: {NODE_ENV: 'development'}})
})
