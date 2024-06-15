module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': ['error', { bracketSpacing: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 'warn',
  },
};
