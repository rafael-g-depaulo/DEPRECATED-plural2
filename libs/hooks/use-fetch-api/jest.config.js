module.exports = {
  displayName: 'hooks-use-fetch-api',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.test.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/hooks/use-fetch-api',
};
