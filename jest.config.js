module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts,vue}',
    '!<rootDir>/src/main.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
};
