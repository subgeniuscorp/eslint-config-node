module.exports = {

	globals: {
		MyGlobal: true
	},

	parserOptions: {
		ecmaVersion: 2020,
	},

	env: {
		node: true,
	},

	extends: [
		'airbnb',
		'eslint:recommended',
	],

	rules: {
		semi: ["error", "always"],
		quotes: ["error", "single"],
		indent: ["error", 2],
		"max-len": ["error", { code: 120 }],
		"no-console": ["warn"],
		"eol-last": ["error", "always"],
	}

};