/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	darkMode:"class",
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				background: {
					"primary": "#1A414B",
					"primary-dark":"#070B0F",
					"secondary-dark": "#02141d",
					"secondary": "#FAFCFD",
					"pyramid-green":"#1A414B"
				},
				button: {
					"primary-dark": "#277ed0",
					"primary":"#1A414B",
					"secondary":"#204751",
					"secondary-dark":"#19242F"
				},
				text: {
					"primary-dark": "#ffffff",
					"primary": "#0A0E11",
					"secondary-dark": "#d7dcde",
					"secondary": "#9D9FA0",
					blue:"#277ED0"
				},
				bubble: {
					"primary-dark": "#277ed0",
					"primary":"#F8F8F8"
				},
				image: {
					"background-dark": "#1f2628",
					background:"#E8EBEC"
				},
			},
		},
	},
	plugins: [],
};
