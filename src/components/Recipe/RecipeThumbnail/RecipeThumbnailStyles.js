import { Col } from "antd";
import styled from "styled-components";

import { SIZES } from "../../../tokens";

export const ThumbnailContainer = styled.div` 
    display: flex;

@media (max-width: ${SIZES.BREAK_LG}) {
    width: 500px;
}

@media (max-width: ${SIZES.BREAK_TABLET}) {
    width: 400px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 200px;
  }


`;

export const ThumbnailImage = styled.img`
    object-fit: contain;
    width: 100%;
`;