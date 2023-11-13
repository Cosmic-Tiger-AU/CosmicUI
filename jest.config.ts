export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/coverage/",
    "/.vscode/",
    "/.github/",
    "/.git/",
    "/.husky/",
  ],
};
