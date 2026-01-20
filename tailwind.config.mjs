/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Palette Sidi Kaouki
				sand: '#f3f0e7',       // Sable chaud
				ocean: '#1e5b5e',      // Bleu Atlantique profond
				azure: '#a6cace',      // Ciel/Ecume
				terra: '#c26d53',      // Terre cuite / Ocre marocain
				dark: '#1a1a1a',
			},
			fontFamily: {
				// On utilisera les polices système par défaut pour la performance,
				// ou tu pourras importer 'Playfair Display' pour les titres plus tard.
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			}
		},
	},
	plugins: [],
}
