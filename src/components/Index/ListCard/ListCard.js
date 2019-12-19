import PropTypes from "prop-types";
import React from "react";
import { getImageUrl } from "takeshape-routing";
/* TODO: replace this default image */
import {
  ListCardContainer,
  CardContainer,
  LCImage,
  LCTitle
} from "./listcardstyles";

const ListCard = ({ currentTitleFilter, listItems }) => {
  return (
    <ListCardContainer>
      {listItems
        .filter(item =>
          item.title.toLowerCase().includes(currentTitleFilter.toLowerCase())
        )
        .map((card, index) => (
          <Card
            index={index}
            name={card.title}
            image={getImageUrl(card.thumbnail.path)}
          />
        ))}
    </ListCardContainer>
  );
};

const Card = ({ name, image }) => {
  console.log(image);
  return (
    <CardContainer>
      <LCImage imageUrl={image} />
      <LCTitle level={2}>{name}</LCTitle>
    </CardContainer>
  );
};

export default ListCard;
