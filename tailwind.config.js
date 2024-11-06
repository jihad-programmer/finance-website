/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: { center: true },
		extend: {
			colors: { primary: "#772ab3", secondary: "#adb2b1" },
			fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
		},
	},
	plugins: [],
};
