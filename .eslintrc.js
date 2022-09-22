module.exports = {
    extends: ['react-app', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
          printWidth: 100,
          semicolons: true,
          quoteProps: 'as-needed',
          jsxSingleQuote: true,
          bracketSpacing: true,
          jsxBracketSameLine: true,
          arrowParens: 'always',
          endOfLine: 'lf',
        },
      ],
    },
  };
  