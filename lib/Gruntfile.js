module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../javascripts/Controller.js']
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: ["document", "console", "$", "event", "alert", "XMLHttpRequest", "module", "require" ],
        esnext: true,
        globalstrict: true,
        globals: {}
      }
    },
    sass: {
      dist: {
        files: {
// target: source
          '../css/style.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../javascripts/*.js'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['browserify', 'jshint', 'sass', 'watch']);
};


