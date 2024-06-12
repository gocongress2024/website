/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			...colors,
			agablue: "#014a7d",
			agagreen: "#008749",
			agayellow: "#c39100",
			agared: "#c33500",
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				"open-sans": ["Open Sans", "sans-serif"],
				jura: ["Jura", "sans-serif"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@kobalte/tailwindcss"),
	],
}
