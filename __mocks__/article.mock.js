import React from 'react';
import { render } from '@testing-library/react';
import Article from '../src/templates/article';

const mockData = {
  recipeAPI: {
    nodeArticles: {
      edges: [
        {
          node: {
            id: "1",
            title: "Test Article",
            author: { displayName: "Marshall Maguire" },
            mediaImage: {
              mediaImage: {
                url: "http://idk.com/image.jpg",
              },
            },
            body: {
              processed: "<p>Article content here.</p>",
            },
          },
        },
      ],
    },
  },
};

test('renders the article component with mock data', () => {
  const { getByText, getByAltText } = render(
    <Article data={mockData} pageContext={{ id: '1' }} />
  );

  expect(getByText('Test Article')).toBeInTheDocument();

  const byText = getByText('By:');
  const authorText = getByText('Marshall Maguire');
  
  expect(byText).toBeInTheDocument();
  expect(authorText).toBeInTheDocument();
  
  expect(byText.parentElement).toContainElement(authorText);

  expect(getByText('Article content here.')).toBeInTheDocument();
  expect(getByAltText('Test Article')).toHaveAttribute('src', 'http://idk.com/image.jpg');
});