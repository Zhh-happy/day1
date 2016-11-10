module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
	htmlmin: { // Task 
		dist: { // Target 
			options: { // Target options 
				removeComments: true,
				collapseWhitespace: true
			},
			files: { // Dictionary of files 
				'build/index.html': 'src/index.html', // 'destination': 'source' 
			}
		}
	},
	cssmin: {
		options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		},
		target: {
		files: {
			'build/css/new.css': 'src/css/new.css'
		}
	}
}

  });

    // ���ذ� "uglify" ����Ĳ����
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
   // Ĭ�ϱ�ִ�е������б?
   grunt.registerTask('default', ['uglify','htmlmin','cssmin']);

};