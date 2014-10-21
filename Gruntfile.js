module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      styles: {
        files: ['_less/**/*.less','bower-components/bootstrap/less/**/*.less','custom_components/custom/less/**/*.less'],
        tasks: ['less:development']
      }
    },
    less: {
      development: {
        options: {
          yuicompress: true,
          compress: true
        },
        files: [{
          expand: true,
          cwd: '_less',
          src: ['*.less','!bootstrap/**/*','!custom/**/*','!variables.less'],
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

