module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        uglify: {
            website: {
                files: [{
                src: 'js/perfmatters.js',
                dest: 'js/perfmatters.js'
                }]
            }
        },
        imagemin: {
            website: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'views/images/',
                    src: ['pizzeria.jpg'],
                    dest: 'views/dest/'
                }]
            }
        }
    });


    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Task definitions
    grunt.registerTask('default',['']);
}