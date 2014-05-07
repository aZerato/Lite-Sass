module.exports = clean = {
	test: {
		src: [
			'<%= config.test %>/styles/fonts/Quicksand/*',
			'<%= config.test %>/styles/fonts/Quicksand/**',
			'<%= config.test %>/styles/fonts/*',
			'<%= config.test %>/styles/fonts/**',
			'<%= config.test %>/styles/*',
			'<%= config.test %>/styles/**',
			'<%= config.test %>/index.html',
			'<%= config.test %>/**',
			'<%= config.test %>/*'
		],
		options: {
			force: true
		}
	},
	build: {
		src: [
			'<%= config.build %>/styles/fonts/Quicksand/*',
			'<%= config.build %>/styles/fonts/Quicksand/**',
			'<%= config.build %>/styles/fonts/*',
			'<%= config.build %>/styles/fonts/**',
			'<%= config.build %>/styles/*',
			'<%= config.build %>/styles/**',
			'<%= config.test %>/**',
			'<%= config.test %>/*'
		],
		options: {
			force: true
		}
	}
};