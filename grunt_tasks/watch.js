module.exports = watch = {
	sass: {
		files: [
			'<%= config.sass %>/**',
			'<%= config.assets %>/*'
		],
		tasks: ['sass:compile', 'clean:test', 'copy:compile']
	}
};