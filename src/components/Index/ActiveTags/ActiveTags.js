import React from "react";
import PropTypes from "prop-types";

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

ActiveTags.defaultProps = {
  isClosable: true
};

export default ActiveTags;
