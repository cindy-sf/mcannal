const { defaults } = require('jest-config')
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'tsx'],
  transform: {
    '\\.(jpg|jpeg|png|gif|otf|svg|ttf)$': '<rootDir>/fileTransformer.js',
  },
  moduleDirectories: [
    'node_modules',
    'src',
    './src/__mocks__/@testing-library/react',
  ],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup.test.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@src(.*)$': '<rootDir>/src$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@assets(.*)$': '<rootDir>/assets$1',
    '^@rtl(.*)$': '<rootDir>/jest/testHelper/index.tsx',
  },
}

module.exports = createJestConfig(customJestConfig)
