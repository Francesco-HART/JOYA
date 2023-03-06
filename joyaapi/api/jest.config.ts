const config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: ['.*\\.spec\\.ts$', '.*\\.steps\\.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['/node_modules/', '.save.ts$'],
  coverageDirectory: '../coverage',
  testTimeout: 20000,
};

export default config;
