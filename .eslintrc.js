module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'cypress', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:cypress/recommended',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        es2021: true,
        'cypress/globals': true,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                tabWidth: 2,
                trailingComma: 'all',
                printWidth: 100,
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
