module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'i18next',
    'orestli',
    'import',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'target',
          'role',
          'as',
          'justify',
          'align',
          'direction',
          'gap',
          'border',
          'theme',
          'size',
        ],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        interfaces: {
          memberTypes: ['field', 'signature', 'method'],
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'export'],
        next: ['const', 'let', 'export'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if',
          'class',
          'for',
          'do',
          'while',
          'switch',
          'try',
          'default',
          'interface',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'if',
          'class',
          'for',
          'do',
          'while',
          'switch',
          'try',
          'interface',
        ],
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'never',
        prev: ['case'],
        next: ['case'],
      },
      {
        blankLine: 'always',
        prev: ['block-like'],
        next: ['case'],
      },
      {
        blankLine: 'always',
        prev: ['block-like', 'expression'],
        next: ['break'],
      },
    ],
    'orestli/path-checker': ['error', { alias: '@' }],
    'orestli/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'orestli/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/StoreDecorator.tsx'],
      },
    ],
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['external', 'internal', 'parent', 'index', 'sibling'],
      },
    ],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
