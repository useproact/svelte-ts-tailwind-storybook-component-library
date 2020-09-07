module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ['./src/**/*.svelte', './dist/index.js'],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
