module.exports = {
    copy_js: {
        expand: true,
        cwd: '<%= paths.src %>/js',
        src: ['*.js'],
        dest: '<%= paths.dist %>/server/js'
    },
    copy_html: {
        expand: true,
        cwd: '<%= paths.src %>/html',
        src: ['*.html'],
        dest: '<%= paths.dist %>/server'
    },
};