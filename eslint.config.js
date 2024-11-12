import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import oxlint from 'eslint-plugin-oxlint';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // JavaScript recommended config
  js.configs.recommended,

  // Vue plugin configuration
  {
    ...pluginVue.configs['flat/essential'],
    rules: {
      // Disable the multi-word component name rule
      'vue/multi-word-component-names': 'off',
    },
  },

  // oxlint recommended configuration
  oxlint.configs['flat/recommended'],

  // Prettier skip formatting
  skipFormatting,
];
