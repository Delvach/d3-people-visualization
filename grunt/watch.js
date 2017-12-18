module.exports = {
    options: {
        livereload: true
    },
    main: {
        files: [
            'grunt/*.js',
            '<%= paths.src %>/html/*',
            '<%= paths.src %>/js/*',
        ],
        tasks: ['run_build']
    }
};