module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	plugins: ['@typescript-eslint', 'filenames', 'import'],
	ignorePatterns: ['*.less.d.ts'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	settings: {
		react: {
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// default to latest and warns if missing
			// It will default to "detect" in the future
		},
	},

	rules: {
		'max-len': [
			'warn',
			{
				code: 100,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				comments: 110,
			},
		],
		'import/named': 'off',
		'import/no-extraneous-dependencies': [
			'warn',
			{ devDependencies: ['**/*.spec.ts', './test/**/*.ts'] },
		],
		'import/no-internal-modules': [
			'error',
			{
				forbid: ['@charm/common-data/**'],
				forbid: ['@charm/webcontext/**'],
				forbid: ['@charm/plugin-firerf/**'],
				forbid: ['@charm/plugin-trees/**'],
			},
		],
		'filenames/match-regex': [
			'error',
			'^[a-z]{1}[a-zA-Z-_.]+$|^[0-9]+_[a-z]{1}[0-9a-zA-Z-_.]+$',
			true,
		],
		'@typescript-eslint/ban-types': 'warn',
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		camelcase: 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
			{ selector: 'property', format: ['camelCase'] },
			{
				selector: [
					'interface',
					'class',
					'typeAlias',
					'enum',
					'typeParameter',
				],
				format: ['PascalCase'],
			},
			{
				selector: ['enumMember'],
				format: ['UPPER_CASE', 'PascalCase'],
			},
			{
				selector: ['accessor', 'classMethod'],
				modifiers: ['static'],
				format: ['PascalCase'],
			},
		],
	},

	overrides: [
		{
			// Jest configuration files are always processed in a node context.
			files: ['jest.config.js'],
			env: {
				node: true,
			},
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
