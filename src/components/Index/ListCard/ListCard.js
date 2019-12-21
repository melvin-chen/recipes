import PropTypes from "prop-types";
import React from "react";
import { getImageUrl } from "takeshape-routing";
/* TODO: replace this default image */
import {
  ListCardContainer,
  CardContainer,
  LCImage,
  LCTitle,
  EmptyState,
  ESImageContainer,
  ESText
} from "./ListCardStyles";

import routes from "../../../routes.js";
import { useCookies } from "react-cookie";

const ListCard = ({
  currentType,
  currentTags,
  currentTitleFilter,
  listItems,
  isDark
}) => {

  let postFilterList = listItems.filter(
    item =>
      //title search query
      item.title.toLowerCase().includes(currentTitleFilter.toLowerCase()) &&
      //tag search query
      currentTags.every(val => {
        let itemtags = [];
        item.tags.forEach(element => {
          itemtags.push(element.name);
        });
        return itemtags.includes(val);
      }) &&
      //type query
      (!currentType || currentType === "none" || item.type.type === currentType)
  );
  return (
    <ListCardContainer>
      {postFilterList.length > 0 ? (
        postFilterList.map((card, index) => (
          <Card
            key={index}
            index={index}
            name={card.title}
            image={getImageUrl(card.thumbnail.path)}
            isDark={isDark}
          />
        ))
      ) : (
        <ES />
      )}
    </ListCardContainer>
  );
};

const Card = ({ name, image, isDark }) => {
  return (
    <CardContainer to={routes.project(name)} isDark={isDark}>
      <LCImage imageUrl={image} />
      <LCTitle level={2}>{name}</LCTitle>
    </CardContainer>
  );
};

//Using ES since EmptyState is already a component
const ES = () => {
  return (
    <EmptyState>
      <ESImageContainer />
      <ESText level={2}>No results found</ESText>
    </EmptyState>
  );
};

export default ListCard;
