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
					primary: "#070b0f",
					"dark-primary":"#fff",
					secondary: "#02141d",
				},
				button: {
					primary: "#277ed0",
				},
				text: {
					primary: "#ffffff",
					secondary: "#d7dcde",
				},
				bubble: {
					primary: "#277ed0",
				},
				image: {
					background: "#1f2628",
				},
				splash:{
					dark:"#080A0B",
					light:"#1A414B"
				}
			},
		},
	},
	plugins: [],
};
