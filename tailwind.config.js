module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
	],
	theme: {
		extend: {
			// backgroundImage: {
			// 	HeroBg: "url('./assets/linesHero.svg')",
			// 	ResumeBg: "url('./assets/LinesApp.svg')",
			// },
		},
	},
	plugins: [
		require("flowbite/plugin")
]
};
