module.exports = [
  {
    files: ['*.js'], 
    languageOptions: {
      globals: {
        window: true,
        document: true,
        it: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        test: 'readonly'  
      },
      sourceType: 'module', 
      ecmaVersion: 'latest', 
    },
    extends: ['eslint:recommended'],
    rules: {
      
    },
  },
];

