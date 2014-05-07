module.exports = copy = {
	compile: {
		files: [
			{src: '<%= config.assets %>/index.html', dest: '<%= config.test %>/index.html'},
			{expand: true, cwd: '<%= config.fonts %>/', src: '**', dest: '<%= config.test %>/styles/fonts/'}
		]
	},
	build: {
		files: [
			{expand: true, cwd: '<%= config.fonts %>/', src: '**', dest: '<%= config.build %>/styles/fonts/'}
		]
	}
};