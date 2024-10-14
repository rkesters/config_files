const allExtensions = ['.ts', '.tsx', '.d.ts'];

module.exports = {
	root: true,
	extends: ['@charm/eslint-config'],
	env: {
		node: true,
		browser: true,
	},
	ignorePatterns: [
		'**/generated/*.*',
		'src/types/database/helpers.ts',
		'src/types/api/types.ts',
	],
	settings: {
		'import/extensions': allExtensions,
		'import/external-module-folders': [
			'node_modules',
			'node_modules/@types',
		],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
		},
		'import/resolver': {
			node: {
				extensions: allExtensions,
			},
		},
	},
	rules: {
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
			{ selector: 'property', format: ['camelCase'] },
			{
				selector: ['class', 'typeAlias', 'enum', 'typeParameter'],
				format: ['PascalCase'],
			},
			{
				selector: ['enumMember'],
				format: ['UPPER_CASE', 'PascalCase'],
			},
			{
				selector: ['accessor'],
				filter: 'Instance',
				modifiers: ['static'],
				format: ['PascalCase'],
			},
			{
				selector: 'interface',
				prefix: ['I'],
				format: ['PascalCase'],
			},
			{
				selector: 'variable',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
		],
		'import/no-restricted-paths': [
			'error',
			{
				zones: [
					{
						target: './src/validation',
						from: './src/types/database/generated',
						except: ['./basicValidators.ts'],
					},
				],
			},
		],
	},
};
