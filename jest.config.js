const { defaults } = require('jest-config')
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'tsx'],
  transform: {
    '\\.(jpg|jpeg|png|gif|otf|svg|ttf)$':
      '<rootDir>/fileTransformer.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/jest/setup/index.js'
  ],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@src(.*)$": "<rootDir>/src$1",
    "^@assets(.*)$": "<rootDir>/assets$1",
  },
}

module.exports = createJestConfig(customJestConfig)
