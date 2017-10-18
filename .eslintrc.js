module.exports = {
  'root': true,
  //'parser': 'babel-eslint',
  /*'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'shared-node-browser': true,
    'worker': true,
    'jest': true,
    'serviceworker': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    }
  },*/
  'extends': [
    './node_modules/kcd-scripts/eslint.js',
    'kentcdodds/babel-react-require',
  ],
  'rules': {
    'react/jsx-max-props-per-line': 'off',
  }
};
