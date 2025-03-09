module.exports = {
  extends: ['airbnb'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
        devDependencies: [
          '*.config.js',
        ],
      },
    ],
  },
};
