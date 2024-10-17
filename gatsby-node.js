const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve('src/templates/recipe.js');
  const articleTemplate = path.resolve('src/templates/article.js');

  const result = await graphql(`
    {
      recipeAPI {
        nodeRecipes(first: 100) {
          edges {
            node {
              id
              path
              title
            }
          }
        }
        nodeArticles(first: 100) {
          edges {
            node {
              id
              path
              title
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
  const articles = result.data.recipeAPI.nodeArticles.edges;

  recipes.forEach(({ node }) => {
    createPage({
      path: `/en/recipes/${node.title.toLowerCase().replace(/\s+/g, '-')}`,
      component: recipeTemplate,
      context: {
        id: node.id,
      },
    });
  });

  articles.forEach(({ node }) => {
    createPage({
      path: `/en/articles/${node.title.toLowerCase().replace(/\s+/g, '-')}`,
      component: articleTemplate,
      context: {
        id: node.id,
      },
    });
  });
};