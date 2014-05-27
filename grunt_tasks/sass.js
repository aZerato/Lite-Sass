module.exports = sass = {
	compile: {
		options: {
			outputStyle: 'nested'
		},
		files: {
			'<%= config.test %>/styles/lite.css': '<%= config.sass %>/register.scss'
		}
	},
	build: {
		options: {
			outputStyle: 'compressed'
		},
		files: {
			'<%= config.build %>/styles/lite.css': '<%= config.sass %>/register.scss'
		}
	}
};