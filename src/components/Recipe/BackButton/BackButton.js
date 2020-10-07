import React from "react";

import { BackButtonLink, BackButtonIcon } from "./BackButtonStyles";
import IndexPage from "../../../pages/index";
const BackButton = () => {
  return (
    <BackButtonLink to="/">
      <BackButtonIcon type="left" />
      Back
    </BackButtonLink>
  );
};

export default BackButton;
