module.exports = {
  // "root": true,
	"env": {
    "node": true,
    "browser": true,
		"es6": true
	},
	"extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
    "airbnb-base"
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
    'import/no-unresolved': {
      commonjs: true,
      amd: true
		},
		"global-require": "off"
	}
};