/*jslint node: true */
/*jshint camelcase: false */
/*global module:false */

'use strict';

var folderMount, lrSnippet, path;

path = require('path');

lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

folderMount = function(connect, point) {
  return connect["static"](path.resolve(point));
};

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      all: ['.tmp', 'public/css', 'public/js']
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'app/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    commonjs: {
      modules: {
        cwd: 'app/js',
        src: '**/*.js',
        dest: '.tmp/js/'
      }
    },

    stylus: {
      compile: {
        files: {
          'public/css/application.css': ['app/**/*.styl']
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'public/css/application.css': ['public/css/application.css']
        }
      }
    },

    ember_templates: {
      compile: {
        options: {
          templateName: function(sourceFile) {
            return sourceFile.replace(/app\/js\/templates\//, '');
          }
        },
        files: {
          '.tmp/js/templates.js': ['app/**/*.hbs']
        }
      }
    },

    concat: {
      styles: {
        src: [
          'vendor/css/normalize.css',
          'vendor/css/bootstrap.min.css',
          'vendor/css/bootstrap-mods.css',
          'vendor/css/bootstrap-responsive.min.css',
          'public/css/application.css'
        ],
        dest: 'public/css/application.css'
      },
      precompile: {
        src: [
          'vendor/js/jquery.js',
          'vendor/js/common.js',
          'vendor/js/handlebars.runtime.js',
          'vendor/js/ember.min.js',
          'vendor/js/ember-data.min.js',
          'vendor/js/localstorage-adapter.js',
          'vendor/js/bootstrap.min.js',
          'vendor/js/showdown.js',
          'vendor/js/moment.js',
          '.tmp/js/templates.js',
          '.tmp/**/*.js'
        ],
        dest: 'public/js/application.js'
      },
      scripts: {
        src: [
          'vendor/js/jquery.js',
          'vendor/js/common.js',
          'vendor/js/handlebars.runtime.js',
          'vendor/js/ember.js',
          'vendor/js/ember-data.js',
          'vendor/js/localstorage-adapter.js',
          'vendor/js/bootstrap.min.js',
          'vendor/js/showdown.js',
          'vendor/js/moment.js',
          '.tmp/js/templates.js',
          '.tmp/**/*.js'
        ],
        dest: 'public/js/application.js'
      }
    },

    uglify: {
      precompile: {
        files: {
          'public/js/application.js': ['public/js/application.js']
        }
      }
    },

    regarde: {
      jscript: {
        files: 'app/js/**/*.js',
        tasks: ['jshint', 'default', 'livereload', 'regarde']
      },
      handlebars: {
        files: 'app/**/*.hbs',
        tasks: ['default', 'livereload', 'regarde']
      },
      stylus: {
        files: 'app/**/*.styl',
        tasks: ['default', 'livereload', 'regarde']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-commonjs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.registerTask('default', [
    'clean',
    'commonjs',
    'stylus',
    'ember_templates',
    'concat:scripts',
    'concat:styles'
  ]);

  grunt.registerTask('watch', [
    'livereload-start',
    'regarde'
  ]);

  grunt.registerTask('precompile', [
    'clean',
    'commonjs',
    'stylus',
    'ember_templates',
    'concat:precompile',
    'concat:styles',
    'uglify',
    'cssmin'
  ]);
};

