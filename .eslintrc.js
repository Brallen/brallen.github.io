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
      // Define the configuration for `.astro` file.
      files: [ '*.astro' ],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      extends: [
        'plugin:astro/recommended',

      ],
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: [ '.astro' ],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      files: [ '*.ts', '*.tsx' ],
      extends: [
        'plugin:react/recommended',

        'plugin:react/jsx-runtime',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [ '@typescript-eslint' ],
    },
  ],
  plugins: [
    'import',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [ 1, { 'extensions': [ '.js', '.jsx', '.ts', '.tsx', '.astro' ] }],
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
    'indent': 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
  },
};
