module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': ['error', { bracketSpacing: true, printWidth: 100 }],
    'arrow-body-style': ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': 'off',
  },
};
