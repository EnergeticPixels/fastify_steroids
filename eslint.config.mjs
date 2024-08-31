import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  // "rules": {
  //   "no-console": "off",
  //   "no-undef": "off",
  //   "no-unused-vars": "off"
  // }
];
