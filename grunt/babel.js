module.exports = {
    
    default: {
        options: {
            sourceMap: true,
            presets: ['env']
        },
        files: {
            '<%= paths.dist %>/server/main.js': '<%= paths.src %>/server/main.js'
        }
    }
};