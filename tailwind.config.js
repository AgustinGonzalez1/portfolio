/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "#dddddd",
				light: "#dddddd88",
			},
		},
	},
	plugins: [],
};
