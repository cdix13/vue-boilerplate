const isProd = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "prettier",
    "prettier/vue",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["vue", "prettier", "vuetify"],
  rules: {
    "no-console": isProd ? "error" : "off",
    "no-debugger": isProd ? "error" : "off",
    "vuetify/no-deprecated-classes": "error",
    // 'no-param-reassign': 'off',
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
