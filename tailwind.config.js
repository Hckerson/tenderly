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
					"secondary": "#FAFCFD",
					"tertiary":"#FAFCFD",
					"quad":"#F2F5F6",
					"pent":"#FFFFFF",
					"primary-dark":"#070B0F",
					"secondary-dark": "#02141d",
					"tertiary-dark":"#161A20",
					"quad-dark":"#070B0F",
					"pyramid-green":"#1A414B",
					"light-green":"#E7F7F1"

				},
				button: {
					"primary":"#1A414B",
					"primary-dark": "#277ed0",
					"secondary":"#204751",
					"secondary-dark":"#19242F",
					"border-primary":"#2A515B"
				},
				text: {
					"primary": "#ffffff",
					"secondary": "#9D9FA0",
					"primary-dark": "#0A0E11",
					"secondary-dark": "#d7dcde",
					"tertiary":"#1F363D",
					"blue":"#277ED0"
				},
				bubble: {
					"primary":"#F8F8F8",
					"primary-dark": "#277ed0",
				},
				image: {
					"background":"#E8EBEC",
					"background-dark": "#1f2628",
				},
				stroke:{
					"primary":"#EFEFEF",
					"secondary":"#EFEFEF"
				}
			},
		},
	},
	plugins: [],
};
