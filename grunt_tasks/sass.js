module.exports = sass = {
	compile: {
		options: {
			style: 'expanded'
		},
		files: {
			'<%= config.test %>/styles/lite.css': '<%= config.sass %>/register.scss'
		}
	},
	build: {
		options: {
			style: 'compressed'
		},
		files: {
			'<%= config.build %>/styles/lite.css': '<%= config.sass %>/register.scss'
		}
	}
};