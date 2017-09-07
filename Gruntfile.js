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
        }
    });


    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');

    // Task definitions
    grunt.registerTask('default',['']);
}