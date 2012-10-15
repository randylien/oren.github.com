## example for using grunt

In this example I use grunt to do the following:  
linting, compiling stylus files, minimizing css files and concatenation and minimizing js files.  
In addition, it will compile stylus files into css when they change.

first, let's install grunt as a global package:

    npm install grunt -g

create `grunt.js` in the root dir of your project. this is grunt's config file.

    module.exports = function(grunt) {
  
    grunt.initConfig({
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
      },
      stylus: {
        compile : {
          files : {
            'public/css/site.css' : 'public/styles/*.styl'
          }
        }
      },
      cssmin : {
        dist : {
          src: [
            'public/css/font-awesome.css',
            'public/css/site.css',
            'public/css/prettify.css'
          ],
          dest: 'public/css/production.css'
        }
      },
      concat: {
        dist: {
          src: [
            'public/js/prettify.js',
            'public/js/ga.js',
            'public/js/app.js'
          ],
          dest: 'public/js/production.js'
        }
      },
      min : {
        dist : {
          src : 'public/js/production.js',
          dest : 'public/js/production.min.js'
        }
      },
      watch: {
        files: ['public/styles/*.styl'],
        tasks: 'stylus'
      }
    });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('default', 'lint stylus cssmin concat min');

};

modify the files to fit into your project or even remove sections that are not relevant to you.

    grunt

That's it. all the tasks that are defined in grunt.registerTask will run - lint stylus cssmin concat min.  
One more thing - watching changes in stylus files - 
    
    grunt watch

