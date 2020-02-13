module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts,vue}',
    '!<rootDir>/src/main.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  setupFiles: ['<rootDir>/tests/unit/config/jest.setup.js'],
  testMatch: [
    '<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)',
    '<rootDir>/tests/unit/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  coveragePathIgnorePatterns: [
    // Things I don't want to test nor cover in store
    '<rootDir>/src/store/index.js',
    '<rootDir>/src/store/state',
    '<rootDir>/src/store/mutation-types',
    // I don't want to test nor cover my Vuefify plugin
    '<rootDir>/src/plugins/vuetify.js',
    // I don't want to test nor cover my router configuration files
    '<rootDir>/src/router',
    // I don't want to test the register service worker file
    '<rootDir>/src/registerServiceWorker.js',
  ],
};
