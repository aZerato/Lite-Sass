module.exports = concurrent = {
	compilesass: {
		tasks: ['watch:sass', 'clean:test', 'copy:compile', 'sass:compile'],
		options: {
			livereload: true
		}
	}
};