module.exports = function(grunt) {

    /**
	* tasks configurations.
	*/
    var config = require('./grunt_tasks/config');
    var sass = require('./grunt_tasks/sass');
    var clean = require('./grunt_tasks/clean');
    var copy = require('./grunt_tasks/copy');
    var watch = require('./grunt_tasks/watch');
    var concurrent = require('./grunt_tasks/concurrent');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      config: config,
      sass: sass,
      clean: clean,
      copy: copy,
      watch: watch,
      concurrent: concurrent
    });

    /**
	* load tasks.
	*/
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    /*
	* register tasks
	*/
    grunt.registerTask('compile', [
      'concurrent:compilesass'
    ]);

    grunt.registerTask('build', [
      'clean:build',
      'copy:build',
      'sass:build'
    ]);
};