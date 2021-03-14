module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'eslint-config-prettier',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/no-unused-vars': [
      1,
      { args: 'all', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-var-requires': 1,
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'off',
    'no-unused-expressions': 'warn',
    'react/prop-types': 'off',
  },
  ignorePatterns: [
    // ignoring this files to prevent eslint warnings due to commonjs usage
    'eslintrc.js',
  ],
};
