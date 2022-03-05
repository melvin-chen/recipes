import React from "react";

import { BackButtonLink, BackButtonIcon } from "./BackButtonStyles";
const BackButton = () => {
  return (
    <BackButtonLink to="/">
      <BackButtonIcon type="left" />
      Back
    </BackButtonLink>
  );
};

export default BackButton;
