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
                    'src/scripts/rolling-slider.min.js': 'src/scripts/rolling-slider.js'
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

    // Default task.
    grunt.registerTask('uglify-lib', ['jshint', 'uglify']);
    grunt.registerTask('build', ['sass', 'uglify-lib']);
};
