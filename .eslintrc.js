module.exports = {
    extends: ['airbnb'],
    rules: {
      'react/jsx-filename-extension': 'warn',
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    plugins: [
      "react-hooks"
    ],
};