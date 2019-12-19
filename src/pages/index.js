import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ListCard from "../components/ListCard/ListCard"

/* TODO:
- Homepage
  - Render all recipes
  - Make filter and search for recipes
- Recipe page
  - Render ingredients
  - Render tools
  - Render steps and images
- To install
  - Ant Design
  - Styled Components

- CLEANUP

- Distant future directions:
  - split instructions
 */
const IndexPage = ({ data }) => {
  const recipeList = data.takeshape.getSingleRecipeList;
  console.log(recipeList);
  return (
    <Layout>
      <SEO title="Home" />
      <ListCard listItems={recipeList.items}/>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    takeshape {
      getSingleRecipeList {
        items {
          title
          stepSection {
            section {
              stepItems {
                asset {
                  path
                  title
                }
                step
              }
            }
          }
          thumbnail {
            path
          }
          ingredientSection {
            tools {
              item
            }
            foodItems {
              item
            }
          }
        }
      }
    }
  }
`;