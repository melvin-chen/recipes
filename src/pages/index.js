import React, { useState } from "react";
import { graphql } from "gatsby";
import { useCookies, withCookies } from "react-cookie";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  IndexHeader,
  IndexSubheader,
  DarkSwitch,
} from "../components/Index/IndexComponents/IndexComponentsStyles";
import Filter from "../components/Index/Filter/Filter";
import ListCard from "../components/Index/ListCard/ListCard";
import { Sun, Moon } from "react-feather";
import { CustomContentWrapper } from "../components/Base/ContentWrapperStyles";

var ExecutionEnvironment = require("exenv");
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

- test netlify
 */

const IndexPage = ({ data }) => {
  const recipeList = data.takeshape.getSingleRecipeList;
  const tagsList = data.takeshape.getTagsList;
  const typeList = data.takeshape.getTypeList;

  const [titleInput, setTitleInput] = useState("");
  const [currentTags, setTagsInput] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const [cookies, setCookie] = useCookies(["isDark"]);

  //This is bad practice to manipulate dom directly but necessary to toggle dom body color
  const toggleBodyColor = (isDark) => {
    if (ExecutionEnvironment.canUseDOM) {
      document.body.style.transition = "background-color 300ms";
      isDark
        ? (document.body.style.backgroundColor = "#000000")
        : (document.body.style.backgroundColor = "#fff");
    }
  };

  const toggleLightMode = (isDark) => {
    // cookie will last 30 days
    const today = new Date();
    let expirationDate = new Date();
    expirationDate.setDate(today.getDate() + 30);

    setCookie("isDark", isDark, { expires: expirationDate });
    toggleBodyColor(isDark);
  };

  toggleBodyColor(cookies.isDark === "true");
  console.log(cookies.isDark);

  return (
    <Layout>
      <SEO title="Home" />
      <CustomContentWrapper isDark={cookies.isDark === "true"}>
        <DarkSwitch
          unCheckedChildren={<Sun size={14} style={{ display: "block" }} />}
          checkedChildren={<Moon size={16} style={{ display: "block" }} />}
          defaultChecked={cookies.isDark === "true"}
          onChange={(checked) => {
            toggleLightMode(checked);
          }}
        />
        <IndexHeader level={1}>
          Definitely <em>Not</em> Stolen Recipes
        </IndexHeader>
        <IndexSubheader>
          (they're sometimes edited by a couple people)
        </IndexSubheader>
        <Filter
          titleFilterCallback={(title) => setTitleInput(title)}
          typeFilterCallback={(selectedType) => setCurrentType(selectedType)}
          tagsFilterCallback={(selectedTags) => setTagsInput(selectedTags)}
          tagsList={tagsList}
          typeList={typeList}
        />
        <ListCard
          currentType={currentType}
          currentTags={currentTags}
          currentTitleFilter={titleInput}
          listItems={recipeList.items}
          isDark={cookies.isDark === "true"}
        />
      </CustomContentWrapper>
    </Layout>
  );
};

export default withCookies(IndexPage);

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
          tags {
            name
          }
          type {
            type
          }
        }
      }
      getTagsList {
        items {
          name
        }
      }
      getTypeList {
        items {
          type
          order
        }
      }
    }
  }
`;
