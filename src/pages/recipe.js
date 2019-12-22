import React from "react";
import { graphql } from "gatsby";
import { useCookies, withCookies } from "react-cookie";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  IndexHeader,
  IndexSubheader,
  DarkSwitch
} from "../components/Index/IndexComponents/IndexComponentsStyles";
import IngredientsAndToolsList from "../components/Recipe/IngredientsAndToolsList/IngredientsAndToolsList";
import StepsList from "../components/Recipe/StepsList/StepsList";
import RecipeThumbnail from "../components/Recipe/RecipeThumbnail/RecipeThumbnail";
import BackButton from "../components/Recipe/BackButton/BackButton";
import { Sun, Moon } from "react-feather";
import { CustomContentWrapper } from "../components/Base/ContentWrapperStyles";

import ActiveTags from "../components/Recipe/ActiveTags/ActiveTags";
var ExecutionEnvironment = require("exenv");


const Recipe = ({ data }) => {
  const recipeData = data.takeshape.getSingleRecipe;
  console.log(recipeData);
  const [cookies, setCookie] = useCookies(["isDark"]);

    //This is bad practice to manipulate dom directly but necessary to toggle dom body color
  const toggleBodyColor = isDark => {
    if (ExecutionEnvironment.canUseDOM) {
      document.body.style.transition = "background-color 300ms";
      isDark
        ? (document.body.style.backgroundColor = "#000000")
        : (document.body.style.backgroundColor = "#fff");
    }
  };

  const toggleLightMode = isDark => {
    // cookie will last 30 days
    const today = new Date();
    let expirationDate = new Date();
    expirationDate.setDate(today.getDate() + 30);

    setCookie("isDark", isDark, { expires: expirationDate });
    toggleBodyColor(isDark);
  };

  toggleBodyColor(cookies.isDark === "true");

  
  if (!recipeData) {
    return <p>Nothing</p>;
  }
  const thumbnail = recipeData.thumbnail;
  const ingredients = recipeData.ingredientSection.foodItems
    ? recipeData.ingredientSection.foodItems
    : [];
  const tools = recipeData.ingredientSection.tools
    ? recipeData.ingredientSection.tools
    : [];
  const steps = recipeData.stepSection ? recipeData.stepSection : [];
  const tags = recipeData.tags ? recipeData.tags : [];
  const currentTags = tags.map(function(item) {
    return item["name"];
  });

  return (
    <Layout>
      <SEO title={recipeData.title} />
      <CustomContentWrapper isDark={cookies.isDark === "true"}>

      <BackButton />
        <DarkSwitch
          unCheckedChildren={<Sun size={14} style={{ display: "block" }} />}
          checkedChildren={<Moon size={16} style={{ display: "block" }} />}
          defaultChecked={cookies.isDark === "true"}
          onChange={checked => {
            toggleLightMode(checked);
          }}
        />
      <IndexHeader level={1}>{recipeData.title}</IndexHeader>
      <RecipeThumbnail path={thumbnail.path} />
      <ActiveTags
        currentTags={currentTags}
      />
      <IngredientsAndToolsList ingredients={ingredients} tools={tools} />
      <StepsList steps={steps} />
      </CustomContentWrapper>
    </Layout>
  );
};

export default Recipe;

export const query = graphql`
  query($recipeId: ID = "d") {
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
        tags {
          _id
          name
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
