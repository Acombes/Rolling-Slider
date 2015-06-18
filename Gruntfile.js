module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            build: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded',
                    quiet: true
                },
                files: {
                    'src/styles/rolling-slider.css': 'src/styles/rolling-slider/rolling-slider.scss'
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true,
                    dead_code: true
                },
                preserveComments: false,
                screwIE8: true
            },
            lib: {
                files: {
                    'src/scripts/rolling-slider.min.js': 'src/scripts/rolling-slider.js',
                    'src/scripts/rolling-slider-vanilla.min.js': 'src/scripts/rolling-slider-vanilla.js'
                }
            }
        },
        watch: {
            /*options: {
                livereload: true
            },*/
            scss: {
                files: ['**/*.scss'],
                task: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        jshint: {

        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('uglify-lib', ['jshint', 'uglify']);
    grunt.registerTask('build', ['sass', 'uglify-lib']);
};
