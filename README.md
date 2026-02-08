# Test Automation Project Setup
This guide explains how to set up a Cypress + TypeScript test automation project from scratch.

## 1. Install [Node.js](https://nodejs.org/en/download)
Verify the installation:
```bash
node -v
npm -v
```

Install [Node Version Manager](https://github.com/coreybutler/nvm-windows/releases)
nvm-setup-exe

```bash
nvm use 24
```

navigate to the project and initialize the Node project
```bash
npm init -y
```
This creates a package.json file.

## 2. Install Cypress and related packages
```bash
npm install --save-dev cypress typescript ts-node @types/node
```
- cypress@15.10.0 → End-to-end testing framework
- typescript@5.9.3 → TypeScript support
- ts-node@10.9.2 → Run TypeScript files in Node
- @types/node@24.10.12 → Node type definitions

<!-- SKIP 
```bash
npm install --save-dev cypress-real-events
npm install --save-dev cypress-terminal-report
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-cypress
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
-->

## 3. Initialize Cypress
```bash
npx cypress open
```

This creates the cypress/ folder and default configuration files.

The Cypress GUI will open for the first run.

## 4. Configure TypeScript 
Create a tsconfig.json file in the root of your project:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "lib": [
      "ES2020",
      "DOM"
    ],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "cypress/**/*.ts"
  ]
}
```
This ensures TypeScript recognizes Cypress and Node types.

## 5. Update package.json scripts
Add the following scripts for easy test execution:
```json
"scripts": {
"cy:open": "cypress open",
"cy:run": "cypress run"
},
```

## 6. Running Cypress
Open the Cypress GUI:
```bash
npm run cy:open
```

Run tests headless:
```bash
npm run cy:run
```

## 7. GitHub Actions Pipeline

You can set up a GitHub Actions workflow to run your Cypress + TypeScript tests automatically on push or pull request.

Create a file in your repository: `.github/workflows/cypress.yml`  

Example workflow:

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '24'

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        uses: cypress-io/github-action@v6
        with:
          browser: chrome
```

## 8. VS Code extensions and settings
### VS Code extensions
- Install GitHub Actions extension to VS Code
- ESLint (Microsoft)
- Test Utils

<!-- 
go to settings -> search: format on save -> Check: 'Editor: Format On Save'

go to settings -> search: eslint validate -> Edit in settings.json
```json
{
    "editor.formatOnSave": true,
    "eslint.validate": ["javascript", "typescript", "typescriptreact"],
    "eslint.workingDirectories": [
        {
            "mode": "auto"
        }
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always"
    }
}
```

create .eslintrc.js file in the root
```js
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

```
--->