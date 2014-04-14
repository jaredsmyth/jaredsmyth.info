module.exports = function(grunt) {
    'use strict';
    
    //  Load Grunt Tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    //
    //  Configure Grunt Tasks
    //

    grunt.initConfig({
        //
        //  Javscript Management
        //

        // Compile Handlebar Templates
        handlebars: {
            build: {
                options: {
                    namespace: 'Templates'
                },

                src: ['assets/templates/**/*.hbs', 'assets/templates/**/*.handlebars'],
                dest: 'dist/templates.js'
            }
        },

        // Compile Bower Modules
        bower_concat: {
            build: {
                bowerOptions: {
                    offline: true
                },
                dest: 'assets/library/bower.js',
                dependencies: {
                    'underscore': 'jquery',
                    'backbone': 'underscore',
                    'tendon': 'backbone'
                }
            }
        },

        // Compile All Javascript
        concat_sourcemap: {
            options: {
                sourceRoot: "../",
                sourcesContent: true
            },
            lib: {
                src: [
                    'assets/library/bower.js',
                    'assets/library/**/*.js',
                    'dist/templates.js'
                ],

                dest:'dist/lib.js'

            },

            app: {
                src: [
                    'assets/scripts/before/**/*.js',
                    'assets/app/collections/**/*.js',
                    'assets/app/models/**/*.js',
                    'assets/app/views/**/*.js',
                    'assets/app/frameSelector.js',
                    'assets/app/app.js',
                    'assets/scripts/after/**/*.js'
                ],
                dest: 'dist/app.js'
            }
        },

        // Minimize Javascripts
        uglify: {
            options: { 
                mangle: true,
                compress: true,
                preserveComments: false
            },
            lib: {
                src: ['dist/lib.js'],
                dest: 'dist/min/lib.js'
            },
            app: {
                src: ['dist/app.js'],
                dest: 'dist/min/app.js'
            }
        },

        //
        //  CSS Managments 
        //

        // Style Sheet Tasks

        sass: {
            build: {                              // Another target
                options: {
                    sourceComments: 'map',
                    sourceMap: ''
                },

                files: {
                    'dist/style.css': 'assets/sass/style.scss'
                }
            }

        }, 

        autoprefixer: {
            build: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        
        cmq: {
            production: {
                files: {
                    'dist/min/style.css': 'dist/style.css'
                }
            },
        },


        cssmin: {
            compress: {
                files: {
                    'dist/min/style.css': ['dist/min/style.css']
                }
            }
        },


        //
        //  SVG Management
        //

        // Minimize SVGs
        svgmin: {
            dist: {
                options: {
                    removeViewBox: true,
                    removeUselessStrokeAndFill: false
                },
                files:[{
                    expand: true,
                    src: ['**/*.svg'],
                    cwd: 'assets/svgs',
                    dest: 'tmp/svgs'
                }]
            }
        },

        grunticon: {
            options: {
                svgo: true,
                pngcrush: true,
                defaultHeight: "128px"
            },

            dist: {
                files: [{
                    expand: true,
                    src: ['**/*.png'],
                    cwd: 'assets/svgs',
                    dest: "dist/icons"
                }, {
                    expand: true,
                    src: ['**/*.svg'],
                    cwd: 'tmp/svgs',
                    dest: "dist/icons"
                }],
                options: {
                    pngfolder: "fallback",
                    loadersnippet: "grunticon.loader.js"
                }
            }
        },


        //
        //  Asset Managment
        //
        
        // Copy Assets to Distibution
        copy: {
            images: {
                files: [{
                    expand: true,
                    src: ['**'],
                    cwd: 'assets/images',
                    dest: 'dist/images'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    src: ['**'],
                    cwd: 'assets/fonts/',
                    dest: 'dist/fonts'
                }]
            }
        },


        clean: {
            svg: ["temp", "tmp", "dist/icons/preview.html"],
        },


        // watching tasks

        watch: {
            options: {
                debounceDelay: 250
            },

            bower: {
                files: ['bower_components/**/*.js', 'assets/scripts/**/*.js'],
                tasks: ['bower_concat', 'concat_sourcemap:lib', 'uglify:lib']
            },

            scripts: {
                files: ['assets/app/**/*.js', 'assets/scripts/**/*.js'],
                tasks: ['concat_sourcemap:app']
            },

            styles: {
                files: ['assets/sass/style.scss', 'assets/sass/*/*.scss', 'assets/fonts/*.css'],
                tasks: ['sass', 'autoprefixer']
            },

            svgs: {
                files: ['assets/svgs/**/*'],
                tasks: ['svgs']
            },

            images: {
                files: ['assets/images/**/*'],
                tasks: ['copy:images']
            },

            templates: {
                files: ['assets/templates/**/*.hbs'],
                tasks: ['handlebars', 'concat_sourcemap:lib', 'uglify:lib']
            },

            dist: {
                files: ['dist/**/*'],
                options: {
                    livereload: true
                }
            }
        }
    });

    //
    //  Register Grunt CL Tasks
    //

    
    // JS + CSS + SVGS
    grunt.registerTask('scripts', ['bower_concat', 'concat_sourcemap']);
    grunt.registerTask('styles', ['sass', 'autoprefixer', 'cmq', 'cssmin']);
    grunt.registerTask('svgs', ['svgmin', 'grunticon', 'clean']);
    
    // Asset Managment
    grunt.registerTask('images', ['copy:images']);

    grunt.registerTask('dist', [
        'handlebars', 
        'scripts',
        'styles',
        'svgs',
        'copy',
        'handlebars',
        'uglify'
    ]);

    grunt.registerTask('default', ['dist', 'watch']); 
};