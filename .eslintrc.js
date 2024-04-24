module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    semi: ['off'],
    'import/no-unresolved': [2],
    'import/no-duplicates': ['error'],
    'import/newline-after-import': ['error'],
    'import/no-cycle': [2],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],
    'react/jsx-filename-extension': [2, {extensions: ['.tsx']}],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react-native/no-inline-styles': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads `tsconfig.json` to eslint. Necessary for `eslint-plugin-import`
    },
  },
};
