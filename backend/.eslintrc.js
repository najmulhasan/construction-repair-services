module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'indent': ['warn', 2],
    'quotes': ['warn', 'double'],
    'semi': ['warn', 'always'],
    'eqeqeq': ['warn', 'always'],
    'no-var': 'warn',
    'prefer-const': 'warn',
  },
};
