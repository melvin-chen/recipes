/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const routes = require("./src/routes");

exports.createPages = async ({ actions, graphql }) => {

  const { data } = await graphql(`
    query {
    takeshape {
        getSingleRecipeList {
        items {
            _id
            title
        }
        }
    }
    }
  `);


  data.takeshape.getSingleRecipeList.items.forEach(({ _id, title }) => {
    actions.createPage({
      path: routes.project(title),
      component: path.resolve("./src/pages/recipe.js"),
      context: {
        recipeId: _id
      }
    });
  });
};