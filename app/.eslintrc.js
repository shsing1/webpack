module.exports = {
  // "root": true,
	"env": {
    "node": true,
    "browser": true,
		"es6": true
	},
	"extends": [
    // "airbnb-base",
    "eslint:recommended",
    "plugin:vue/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
  },
  // "parser": "vue-eslint-parser",
	"parserOptions": {
    // "parser": "babel-eslint",
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
	}
};