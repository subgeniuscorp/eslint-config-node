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
    indent: ["error", "tab"],
    "max-len": ["error", { code: 120 }],
    "no-console": ["error"],
    "eol-last": ["error", "always"],
  }

};