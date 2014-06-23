module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      styles: {
        files: ['_less/**/*.less'],
        tasks: ['less:development']
      }
    },
    less: {
      development: {
        options: {
          yuicompress: false,
          compress: false
        },
        files: [{
          expand: true,
          cwd: '_less',
          src: ['*.less','!includes/**/*'],
          dest: 'css',
          ext: '.min.css'
        }]  
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.registerTask('default', ['watch']);
};

