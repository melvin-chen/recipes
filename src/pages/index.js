import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  IndexHeader,
  IndexSubheader
} from "../components/Index/IndexComponents/IndexComponentsStyles";
import Filter from "../components/Index/Filter/Filter";
import ListCard from "../components/Index/ListCard/ListCard";

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
  const tagsList = data.takeshape.getTagsList;
  const typeList = data.takeshape.getTypeList;
  console.log(recipeList);

  const [titleInput, setTitleInput] = useState("");
  const [currentTags, setTagsInput] = useState([]);
  console.log(currentTags);

  return (
    <Layout>
      <SEO title="Home" />
      <IndexHeader level={1}>Slightly tweaked recipes</IndexHeader>
      <IndexSubheader>sometimes edited by a couple people</IndexSubheader>
      <Filter
        titleFilterCallback={title => setTitleInput(title)}
        tagsFilterCallback={selectedTag =>
          currentTags.indexOf(selectedTag) === -1
            ? setTagsInput(old => [...old, selectedTag])
            : null
        }
        tagsList={tagsList}
        typeList={typeList}
      />
      <ListCard
        currentTags={currentTags}
        currentTitleFilter={titleInput}
        listItems={recipeList.items}
      />
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
        }
      }
    }
  }
`;
