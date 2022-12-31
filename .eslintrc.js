module.exports = {
  extends: ["standard", "plugin:prettier/recommended", "next/core-web-vitals"],
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
    "import/export": "off",
    "react/no-unknown-property": "warn",
  },
};
