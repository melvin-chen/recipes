import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { IndexHeader, IndexSubheader } from "../components/Index/IndexComponents/IndexComponentsStyles";
import IngredientsList from  "../components/Recipe/IngredientsList/IngredientsList";

const Recipe = ({ data }) => {
  const recipeData = data.takeshape.getSingleRecipe;
  console.log(recipeData);
    return (
    <Layout>
      <SEO title={recipeData.title} />
      <IndexHeader level={1}>{recipeData.title}</IndexHeader>
      <IngredientsList />
    </Layout>
    );
  };
  
  export default Recipe;


export const query = graphql`
query($recipeId: ID!)  {
  takeshape {
    getSingleRecipe(_id: $recipeId) {
      _id
      _version
      _contentTypeId
      _contentTypeName
      _createdAt
      _updatedAt
      _enabled
      _enabledAt
      searchSummary
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
          title
          stepItems {
            step
          }
        }
      }
      title
    }
  }
}
`;

