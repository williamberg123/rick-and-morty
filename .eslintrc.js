module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      'react/state-in-constructor': 'off',
       indent: 'off',
      'comma-dangle': 'off',
      'space-before-blocks': 'off',
      'no-tabs': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-fragments': 'off',
      'react/jsx-indent-props': 'off',
      'arrow-parens': 'off',
      'keyword-spacing': 'off',
      'eol-last': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'no-trailing-spaces': 'off',
      'class-methods-use-this': 'off',
      'object-curly-spacing': 'off',
      'react/self-closing-comp': 'off',
      'arrow-body-style': 'off',
      'object-curly-newline': 'off',
      camelcase: 'off',
      'react/jsx-curly-newline': 'off',
      'max-len': 'off',
      'array-callback-return': 'off',
      'import/prefer-default-export': 'off',
      'no-await-in-loop': 'off',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'consistent-return': 'off',
      'non-zero': 'off',
      'no-unused-expressions': 'off',
      'array-bracket-spacing': 'off',
      'react/require-default-props': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'function-paren-newline': 'off'
  },
};
