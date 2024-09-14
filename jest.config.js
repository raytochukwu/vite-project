export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforms TypeScript files
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup files
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocks CSS/SCSS/Less/Sass imports
    '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub', // Mocks image imports
  },
}
