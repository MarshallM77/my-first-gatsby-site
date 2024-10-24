import React from 'react';
import { render } from '@testing-library/react';
import Recipe from '../src/templates/recipe';

const mockData = {
  recipeAPI: {
    nodeRecipes: {
      edges: [
        {
          node: {
            id: "1",
            title: "Test Recipe",
            cookingTime: 30,
            preparationTime: 15,
            numberOfServings: 4,
            difficulty: "Easy",
            ingredients: ["Flour", "Eggs", "Milk"], 
            mediaImage: {
              mediaImage: {
                url: "http://example.com/image.jpg",
              },
            },
            recipeInstruction: {
              processed: "<p>Mix ingredients and cook.</p>",
            },
          },
        },
      ],
    },
  },
};

test('renders the recipe component with mock data, checking ingredients', () => {
  const { getByText } = render(<Recipe data={mockData} pageContext={{ id: '1' }} />);

  mockData.recipeAPI.nodeRecipes.edges[0].node.ingredients.forEach(ingredient => {
    expect(getByText(ingredient)).toBeInTheDocument();
  });
});
