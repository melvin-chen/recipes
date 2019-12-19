import React from "react";
import { graphql } from "gatsby";

const Recipe = ({ data }) => {
  console.log(data.takeshape.getSingleRecipe);
    return (
      <div></div>
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

