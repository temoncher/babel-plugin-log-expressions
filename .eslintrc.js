/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-self-compare": 2,
    "arrow-body-style": 1,
    complexity: [2, 6],
    "no-param-reassign": 2,
    "array-bracket-newline": [1, "consistent"],
    "function-call-argument-newline": [1, "consistent"],
    "func-style": [1, "declaration", { allowArrowFunctions: true }],
    "id-denylist": [
      2,
      "data",
      "err",
      "cb",
      "i",
      "idx",
      "ndx",
      "index",
      "callback",
    ],
    "prefer-exponentiation-operator": 2,
    "padding-line-between-statements": [
      1,
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["if", "try", "class", "export"],
      },
      {
        blankLine: "always",
        prev: ["if", "try", "class", "export"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var", "export"],
        next: ["const", "let", "var", "export"],
      },
      {
        blankLine: "always",
        prev: ["expression"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["return"],
      },
    ],
    "arrow-spacing": 1,
    "no-restricted-exports": [
      1,
      {
        restrictedNamedExports: ["default", "then"],
      },
    ],
    "no-case-declarations": 2,
    "no-irregular-whitespace": 2,
  },
};
