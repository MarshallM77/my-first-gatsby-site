const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve('src/templates/recipe.js');

  const result = await graphql(`
    {
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
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const recipes = result.data.recipeAPI.nodeRecipes.edges;

  // Create a page for each recipe
  recipes.forEach(({ node }) => {
    createPage({
      path: `/recipe/${node.id}`, // Change this to your desired path
      component: recipeTemplate,
      context: {
        id: node.id,
      },
    });
  });
};