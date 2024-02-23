/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/comps/BloodBank/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'primary': "#3085C3",
			}
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}