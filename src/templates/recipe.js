import React from 'react';
import { graphql } from 'gatsby';

const RecipeTemplate = ({ data, pageContext }) => {
  const { id } = pageContext; 
  const recipe = data.recipeAPI.nodeRecipes.edges.find(({ node }) => node.id === id).node;

  return (
    <div>
      <h1>{recipe.title}</h1>
      {recipe.mediaImage && recipe.mediaImage.mediaImage && recipe.mediaImage.mediaImage.url && (
        <img
          src={recipe.mediaImage.mediaImage.url}
          alt={recipe.title}
          style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
        />
      )}
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
      <p><strong>Number of Servings:</strong> {recipe.numberOfServings}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {recipe.recipeInstruction && recipe.recipeInstruction.processed && (
        <div>
          <h3>Instructions:</h3>
          <div
            dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction.processed }}
            style={{ marginTop: '20px' }}
          />
        </div>
      )}
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
            mediaImage {
              mediaImage {
                url
              }
            }
            recipeInstruction {
              processed
            }
          }
        }
      }
    }
  }
`;

export default RecipeTemplate;