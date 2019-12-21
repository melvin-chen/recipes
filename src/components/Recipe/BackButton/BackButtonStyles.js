import styled from "styled-components";
import { Link } from "gatsby";
import { Icon } from "antd";
import { SIZES } from "../../../tokens";

export const BackButtonLink = styled(Link)`
  color: black;
`;

export const BackButtonIcon = styled(Icon)`
  margin: 30px 0px 0px 80px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin: 40px 0px 0px 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    margin: 20px 0px 0px 40px;
  }
`;
