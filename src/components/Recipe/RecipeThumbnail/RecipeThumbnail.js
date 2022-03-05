import React from "react";

import { getImageUrl } from "takeshape-routing";

import { ThumbnailContainer, ThumbnailImage } from "./RecipeThumbnailStyles";

const RecipeThumbnail = ({ path }) => {
  return (
    <ThumbnailContainer>
      <ThumbnailImage
        src={getImageUrl(path)}
        alt="recipe-thumbnail"
      />
    </ThumbnailContainer>
  )
}

export default RecipeThumbnail;