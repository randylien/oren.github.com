{{{
  "title" : "Grunt.js",
  "authorName": "Oren",
  "authorLink": "https://github.com/oren",
  "authorImage": "https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
  "tags" : [ "tech" ],
  "date" : "9-15-2012"
}}}

![grunt](http://gruntjs.com/img/logo.png)

## WAT?
Grunt is a build tool JavaScript project. it automate all the annoying tasks so you don't have to think about them.
a few common tasks - linting, assets minification, compiling stuff (coffeescript, stylus, etc) and running your tests on code change.

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
let's see what happend when you run `grunt`

<pre>
grunt
<span class="nocode">
Running "lint:files" (lint) task
Lint free.

Running "stylus:compile" (stylus) task
File public/css/site.css created.

Running "cssmin:dist" (cssmin) task
File 'public/css/production.css' created.
Uncompressed size: 20097 bytes.
Compressed size: 3270 bytes gzipped (13445 bytes minified).

Running "concat:dist" (concat) task
File "public/js/production.js" created.

Running "min:dist" (min) task
File "public/js/production.min.js" created.
Uncompressed size: 14717 bytes.
Compressed size: 6257 bytes gzipped (14281 bytes minified).

Done, without errors.
</span>
</pre>

That's it. all the tasks that are defined in grunt.registerTask will run - lint stylus cssmin concat min.  
One more thing - watching changes in stylus files - 
    
    grunt watch

