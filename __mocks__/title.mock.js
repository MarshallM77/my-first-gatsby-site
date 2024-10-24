import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Seo from '../src/components/seo';

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  useStaticQuery: jest.fn(),
  graphql: jest.fn(), 
}));

beforeAll(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'Page Title',
      },
    },
  }));
});

test('renders the Seo component with the correct title', () => {
  const { getByText } = render(<Seo title="Test Page" />);
  
  expect(getByText(/Test Page \| Page Title/)).toBeInTheDocument();
});