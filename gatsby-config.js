module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RecipeAPI",
        fieldName: "recipeAPI",
        url: `https://csc496f24demo.tldr.dev/graphql`,
      },
    }, 
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
