const merge = require("merge");
const cloudscapePreset = require("@cloudscape-design/jest-preset");

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/**
 * @type {import('jest').Config}
 */
const customJestConfig = {
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)"],
  testEnvironment: "jest-environment-jsdom",
  reporters: process.env.CI
    ? [
        "summary",
        ["github-actions", { silent: false }],
        ["jest-junit", { outputFile: "test-results/unit-test.xml" }],
      ]
    : ["default"],
  cacheDirectory: "/tmp/jest-cache",
  testTimeout: 90000,
};

/**
 * https://cloudscape.design/get-started/testing/frameworks/
 * https://github.com/cloudscape-design/jest-preset#advanced-usage
 */
module.exports = async () =>
  merge.recursive(cloudscapePreset, {
    ...(await createJestConfig(customJestConfig)()),
  });
