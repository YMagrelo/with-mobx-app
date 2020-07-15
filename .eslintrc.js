module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "rules": {
    "semi": "error",
    "indent": ["error", 2,],
    "react/react-in-jsx-scope": "off"
  },
};


// "no-cond-assign": ["error", "always",],