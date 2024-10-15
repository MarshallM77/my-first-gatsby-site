import React from 'react';
import { graphql } from 'gatsby';

const RecipeTemplate = ({ data }) => {
  const recipes = data.recipeAPI.nodeRecipes.edges;

  return (
    <div>
      <h1>Recipe Details</h1>
      <ul>
        {recipes.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <p><strong>Cooking Time:</strong> {node.cookingTime} minutes</p>
            <p><strong>Preparation Time:</strong> {node.preparationTime} minutes</p>
            <p><strong>Number of Servings:</strong> {node.numberOfServings}</p>
            <p><strong>Difficulty:</strong> {node.difficulty}</p>
            <h3>Ingredients:</h3>
            <ul>
              {node.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    recipeAPI {
      nodeRecipes(first: 100) {
        edges {
          node {
            id
            path
            title
            cookingTime
            difficulty
            ingredients
            numberOfServings
            preparationTime
          }
        }
      }
    }
  }
`;

export default RecipeTemplate;