import PropTypes from "prop-types";
import React from "react";
import { getImageUrl } from "takeshape-routing";
/* TODO: replace this default image */
import {
  ListCardContainer,
  CardContainer,
  LCImage,
  LCTitle
} from "./ListCardStyles";

import routes from "../../../routes.js";

const ListCard = ({
  currentType,
  currentTags,
  currentTitleFilter,
  listItems
}) => {
  console.log(currentType);
  return (
    <ListCardContainer>
      {listItems
        .filter(
          item =>
            //title search query
            item.title
              .toLowerCase()
              .includes(currentTitleFilter.toLowerCase()) &&

            //tag search query
            currentTags.every(val => {
              return val.indexOf(item.tags) < 0;
            }) &&
            
            //type query
            (!currentType ||
              currentType === "none" ||
              item.type.type === currentType)
        )
        .map((card, index) => (
          <Card
            key={index}
            index={index}
            name={card.title}
            image={getImageUrl(card.thumbnail.path)}
          />
        ))}
    </ListCardContainer>
  );
};

const Card = ({ name, image }) => {
  return (
    <CardContainer to={routes.project(name)}>
      <LCImage imageUrl={image} />
      <LCTitle level={2}>{name}</LCTitle>
    </CardContainer>
  );
};

export default ListCard;
