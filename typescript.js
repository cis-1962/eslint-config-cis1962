/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['./base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    // typescript rules
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/', '.*.js'],
};
