/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				background: "url(./assets/images/background.png)",
			},
			keyframes: {
				"opacity-in": {
					"0%": {
						opacity: 0,
					},
				},
				"slide-down": {
					"0%": {
						transform: "translateY(-500px)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
			},
			animation: {
				"show-notify": "opacity-in .3s",
				"show-panel-nottify": "slide-down 0.3s",
			},
		},
	},
	plugins: [],
};
