import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { IndexHeader, IndexSubheader } from "../components/Index/IndexComponents/IndexComponentsStyles";
import IngredientsAndToolsList from  "../components/Recipe/IngredientsAndToolsList/IngredientsAndToolsList";
import StepsList from  "../components/Recipe/StepsList/StepsList";
import RecipeThumbnail from  "../components/Recipe/RecipeThumbnail/RecipeThumbnail";


const Recipe = ({ data }) => {
  console.log(data);
  const recipeData = data.takeshape.getSingleRecipe;
  console.log(recipeData);
  if (!recipeData) {
    return(
      <p>Nothing</p>
    )
  }
  const thumbnail = recipeData.thumbnail;
  const ingredients = recipeData.ingredientSection.foodItems ? recipeData.ingredientSection.foodItems : [];
  const tools = recipeData.ingredientSection.tools ? recipeData.ingredientSection.tools : [];
  const steps = recipeData.stepSection ? recipeData.stepSection : [];
    return (
    <Layout>
      <SEO title={recipeData.title} />
      <IndexHeader level={1}>{recipeData.title}</IndexHeader>
      <RecipeThumbnail path={thumbnail.path}/>
      <IngredientsAndToolsList ingredients={ingredients} tools={tools} />
      <StepsList steps={steps}/>
    </Layout>
    );
  };
  
  export default Recipe;

export const query = graphql`
query($recipeId: ID = "d")  {
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
      thumbnail {
        path
      }
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

