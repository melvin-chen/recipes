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

const ListCard = ({ currentTags, currentTitleFilter, listItems }) => {
  console.log(listItems)
  console.log(currentTags);
  listItems.map(item => currentTags.map(val => {console.log(val.indexOf(item.tags))}))
  return (
    <ListCardContainer>
      {listItems
        .filter(item =>
          (item.title.toLowerCase().includes(currentTitleFilter.toLowerCase())
          && currentTags.every(val => {return val.indexOf(item.tags) < 0}))
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
    <CardContainer>
      <LCImage imageUrl={image} />
      <LCTitle level={2}>{name}</LCTitle>
    </CardContainer>
  );
};

export default ListCard;
