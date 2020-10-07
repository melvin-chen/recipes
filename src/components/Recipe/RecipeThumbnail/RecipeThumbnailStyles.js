import { Col } from "antd";
import styled from "styled-components";

import { SIZES } from "../../../tokens";

export const ThumbnailContainer = styled.div`
  display: flex;
  width: 150px;
  padding: 20px 0 15px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    display: none;
  }
`;

export const ThumbnailImage = styled.img`
  object-fit: contain;
  width: 100%;
`;
