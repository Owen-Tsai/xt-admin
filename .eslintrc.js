module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    JSX: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/block-tag-newline': 'warn',
    'vue/script-indent': [
      'error', 2, {
        switchCase: 1
      }
    ],
    'comma-dangle': 'off',
    'semi': 'off',
    'quote-props': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-regex-literals': 'off',
    'vue/multi-word-component-names': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 2
      },
      'multiline': {
        'max': 1
      }
    }]
  }
}
