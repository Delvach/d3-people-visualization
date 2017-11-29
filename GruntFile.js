module.exports = function(grunt) {
    grunt.registerTask('start_build', function() {
        console.info('Starting grunt build');
    });
    require('load-grunt-config')(grunt, {
        data: {
            paths: {
                src: 'src',
                dist: 'dist',
            },
        },
    });
}