module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true
  },

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },

  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
