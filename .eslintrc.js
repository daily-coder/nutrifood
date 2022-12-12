module.exports = {
  extends: ["standard", "plugin:prettier/recommended", "next/core-web-vitals"],
  rules: {
    "no-console": "warn",
    "sort-imports": ["error", { allowSeparatedGroups: true }],
    "import/export": "off",
    "react/no-unknown-property": "warn",
  },
};
