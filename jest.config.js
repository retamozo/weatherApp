const { defaults } = require('jest-config');

module.exports = {
    displayName: {
        name: 'Weather App',
        color: 'blue',
    },
    preset: "ts-jest",
    rootDir: "src",
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    setupFilesAfterEnv: ["<rootDir>/test-utils/setupTests.ts"],
    collectCoverageFrom: ["<rootDir>/**/*.(tsx|ts)"],
    transform: { "^.+\\.(ts|tsx?)$": "ts-jest" },
}