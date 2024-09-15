import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // "no-console": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
  pluginJs.configs.recommended,
];
