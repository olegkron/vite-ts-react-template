import { defineConfig } from 'vite'
import stylelint from 'vite-plugin-stylelint'
import react from '@vitejs/plugin-react-swc'
import postcssPresetEnv from 'postcss-preset-env'
import postcssSorting from 'postcss-sorting'
import postcssImport from 'postcss-import'
import precss from 'precss'
import postcssDTS from 'postcss-d-ts'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true,
      include: ['./src/**/*.css', './src/**/*.pcss'],
      configFile: './.stylelintrc.json',
      emitErrorAsWarning: true,
    }),
    EnvironmentPlugin('all'),
  ],
  css: {
    postcss: {
      plugins: [postcssDTS(), postcssImport(), postcssSorting(), postcssPresetEnv(), precss()],
    },
  },
})
