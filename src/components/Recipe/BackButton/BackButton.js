import React from "react";

import { BackButtonLink, BackButtonIcon } from "./BackButtonStyles";
const BackButton = () => {
  return (
    <BackButtonLink>
      <BackButtonIcon type="left" />
      back
    </BackButtonLink>
  );
};

export default BackButton;
