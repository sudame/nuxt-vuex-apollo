module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    "google",
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'linebreak-style': ['error', 'unix'],
    'max-len': 0,
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: true,
        trailingComma: "es5"
      }
    ]
  },
};
