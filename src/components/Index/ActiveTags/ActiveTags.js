import React from "react";
import { ActiveTagsContainer, ActiveTag } from "./ActiveTagsStyles";

const ActiveTags = props => {
  return (
    <ActiveTagsContainer>
      {props.currentTags.map((item, index) => (
          <ActiveTag
            closable
            onClick={() => props.tagRemoveCallback(item)}
            key={index}
            value={item}
          >
            {item}
          </ActiveTag>
      ))}
    </ActiveTagsContainer>
  );
};

export default ActiveTags;
