import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const recipeList = data.takeshape.search;
  console.log(recipeList);
  return (
    <Layout>
      <SEO title="Home" />
      hello
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    takeshape {
      search {
        results {
          _id
          __typename
          searchSummary
          ... on TS_SingleRecipe {
            ingredientSection {
              foodItems {
                item
              }
              tools {
                item
              }
            }
            stepSection {
              section {
                stepItems {
                  asset {
                    sourceUrl
                    path
                  }
                  step
                }
                title
              }
            }
          }
        }
      }
    }
  }
`;

/* export const query = graphql`
  query {
    takeshape {
      getSingleRecipe(_id: "f737431c-2615-4965-bb6d-c33331580ab5") {
        _id
        ingredientSection {
          foodItems {
            item
          }
          tools {
            item
          }
        }
        stepSection {
          section {
            stepItems {
              asset {
                path
                sourceUrl
              }
              step
            }
            title
          }
        }
        title
      }
    }
  }
` */
