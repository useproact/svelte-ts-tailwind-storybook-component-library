const tailwind = require('tailwindcss');
const postcssimport = require('postcss-import')();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const plugins = [
	postcssimport,
	tailwind,
	autoprefixer,
	cssnano,
	purgecss({
		content: ['./src/**/*.svelte'],
		defaultExtractor: extractor,
	}),
];

function extractor(content) {
	const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
	const res = matches.map(match => {
		if (match.startsWith('class:')) {
			return match.split(':')[1];
		}
		return match;
	});
	return res;
}

module.exports = { plugins };
