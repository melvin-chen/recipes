import PropTypes from "prop-types";
import React from "react";
import { getImageUrl } from "takeshape-routing";
/* TODO: replace this default image */
import * as defaultImage from "../../images/tenor2.gif";
import { ListCardContainer, CardContainer, LCImage } from "./listcardstyles";

const ListCard = ({ listItems }) => {
  return (
    <ListCardContainer>
      {listItems.map((card, index) => (
        <Card
        index={index}
        name={card.title}
        image={getImageUrl(card.thumbnail.path)} />
      ))}
    </ListCardContainer>
  );
};

const Card = ({ name, image }) => {
  console.log(image);
  return (
    <CardContainer>
      {name}
      <LCImage
      imageUrl={image} />
    </CardContainer>
  );
};

export default ListCard;
