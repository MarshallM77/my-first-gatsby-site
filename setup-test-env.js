import '@testing-library/jest-dom';

global.__PATH_PREFIX__ = ""; 

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}));