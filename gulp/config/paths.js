import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'

const paths = {
	build: {
		files: `${buildFolder}/files`,
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		php: `${buildFolder}/php/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/main.js`,
		php: `${srcFolder}/php/**/*.*`,
		img: `${srcFolder}/img/**/*.*`,
		svgSprite: `${srcFolder}/sprite/*.svg`,
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		php: `${srcFolder}/php/**/*.*`,
		img: `${srcFolder}/img/**/*.*`,
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
	rootFolder,
	ftp: 'localhost',
}

export default paths