import React from 'react';
import { graphql } from 'gatsby';

const ArticleTemplate = ({ data, pageContext }) => {
  const { id } = pageContext; 
  const article = data.recipeAPI.nodeArticles.edges.find(({ node }) => node.id === id).node;

  return (
    <div>
      <h1>{article.title}</h1>
      <p><strong>By:</strong> {article.author.displayName}</p>
      {article.mediaImage && article.mediaImage.mediaImage && article.mediaImage.mediaImage.url && (
        <img
          src={article.mediaImage.mediaImage.url}
          alt={article.title}
          style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
        />
      )}
      {article.body && article.body.processed && (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: article.body.processed }}
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
      nodeArticles(first: 100) {
        edges {
          node {
            id
            path
            title
            author {
              displayName
            }
            mediaImage {
              mediaImage {
                url
              }
            }
            body {
              processed
            }
          }
        }
      }
    }
  }
`;

export default ArticleTemplate;