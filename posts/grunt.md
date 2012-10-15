## example for using grunt

In this example I use grunt to do the following: linting, compiling stylus files, minimizing my css, concatenation and minimizing the js files 

first, let's install grunt as a global package:

    npm install grunt -g

create `grunt.js` this is grunt's config file.

    module.exports = function(grunt) {
      
      grunt.initConfig({
        stylus: {
          compile : {
            files : {
              'public/css/layout.css' : 'public/styles/*.styl'
            }
          }
        },
        cssmin : {
          dist : {
            src: [
              'public/css/font-awesome.css',
              'public/css/engineering.css',
              'public/css/prettify.css'
            ],
            dest: 'public/css/site.css'
          }
        },
        min : {
          dist : {
            src : 'public/js/site.js',
            dest : 'public/js/site.min.js'
          }
        },
        concat: {
          dist: {
            src: [
              'public/js/jquery.sharrre.js',
              'public/js/jquery.tweet.js',
              'public/js/jquery.ghRepo.js',
              'public/js/prettify.js',
              'public/js/ui.js',
              'public/js/app.js'
            ],
            dest: 'public/js/site.js'
          }
        },
        lint: {
          files: ['public/js/app.js', 'grunt.js']
        },
        jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            // undef: true
            boss: true,
            eqnull: true
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib');
      grunt.loadNpmTasks('grunt-css');

      grunt.registerTask('default', 'lint stylus cssmin concat min');
    };

modify the files to fit into your project or even remove sections that are not relevant to you.

    grunt

that's it! 

