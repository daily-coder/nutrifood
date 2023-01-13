module.exports = {
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
    "plugin:import/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "no-console": "warn",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/export": "off",
    "react/no-unknown-property": "warn",
  },
};
