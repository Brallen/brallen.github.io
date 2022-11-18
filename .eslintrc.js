module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows parsing of JSX
    },
    ecmaVersion: 12, // Latest ECMA version at time of file creation
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect version of React to use
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  overrides: [
    {
      files: [ '*.astro' ],
      parser: 'astro-eslint-parser',
      extends: [
        'plugin:astro/recommended',
      ],
      parserOptions: {
        // parser: '@typescript-eslint/parser',
        extraFileExtensions: [ '.astro' ],
      },
    },
    {
      files: [ '*.ts', '*.tsx' ],
      // parser: '@typescript-eslint/parser',
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
      ],
      plugins: [ '@typescript-eslint' ],
    },
  ],
  plugins: [
    'import',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 0,
    'new-cap': 0,
    'max-len': [ 'error', {
      'code': 120,
      'tabWidth': 2,
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'object-curly-spacing': [ 2, 'always' ],
    'array-bracket-spacing': [ 2, 'always', {
      'objectsInArrays': false,
    }],
    'quote-props': [ 2, 'as-needed', {
      'unnecessary': false,
    }],
    'import/order': [
      'error',
      {
        'groups': [ 'builtin', 'external', 'internal' ],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': [ 'react' ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      },
    ],
    'no-unused-vars': [ 'warn', { args: 'none' }],
    'require-jsdoc': 0,
    'indent': [ 'error', 2 ],
    '@typescript-eslint/indent': [ 'error', 2 ],
  },
};
