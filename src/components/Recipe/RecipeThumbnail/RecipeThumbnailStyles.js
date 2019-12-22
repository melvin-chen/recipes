import { Col } from "antd";
import styled from "styled-components";

import { SIZES } from "../../../tokens";

export const ThumbnailContainer = styled.div`
  display: flex;
  width: 150px;
  padding: 20px 0 15px;
  // @media (min-width: ${SIZES.BREAK_LG}) {
  //   width: 150px;
  // }

  // @media (max-width: ${SIZES.BREAK_LG}) {
  //   width: 300px;
  // }

  // @media (max-width: ${SIZES.BREAK_TABLET}) {
  //   width: 150px;
  // }

  // @media (max-width: ${SIZES.BREAK_MOBILE}) {
  //   width: 150px;
  // }
`;

export const ThumbnailImage = styled.img`
  object-fit: contain;
  width: 100%;
`;
