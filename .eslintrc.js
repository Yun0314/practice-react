module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
    // node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaVersion: 13,
    source: 'module',
    jsx: true
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'comma-dangle': [2, 'never'], // 物件、陣列結尾不帶逗號
    'react-hooks/rules-of-hooks': 'error' // 重新配置 react-hooks
  }
};
