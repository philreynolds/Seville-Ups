import eslintPluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts', '**/*.tsx'],
    ignores: ['.nuxt/**', '.output/**', 'node_modules/**', 'dist/**', '.git/**'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        // Nuxt/Vue globals
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
        defineEventHandler: 'readonly',
        definePageMeta: 'readonly',
        useSupabaseClient: 'readonly',
        useSupabaseUser: 'readonly',
        useNuxtData: 'readonly',
        useNuxtApp: 'readonly',
        useState: 'readonly',
        useFetch: 'readonly',
        useAsyncData: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        navigateTo: 'readonly',
        $fetch: 'readonly',

        // Browser globals
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        Buffer: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly',
        global: 'readonly'
      }
    },
    plugins: {
      vue: eslintPluginVue,
      '@typescript-eslint': typescript
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'vue/html-self-closing': ['error', {
        'html': {
          'void': 'always',
          'normal': 'always',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }]
    }
  },
  {
    // Ignore patterns
    ignores: [
      '.nuxt/**',
      '.output/**',
      'node_modules/**',
      'dist/**',
      '.git/**',
      '*.min.js',
      'coverage/**',
      'public/**'
    ]
  }
]