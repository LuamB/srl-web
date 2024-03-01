/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				yellow: "#f8cc49",
			},
			backgroundImage: {
				bg_image: "url('./public/protest-tripoli-2021-02.svg')",
			},
			fontFamily: {
				mono: ["var(--font-ubuntu-mono)"],
			},
		},
	},
	plugins: [],
};
