import { Col } from "antd";
import styled from "styled-components";

import { SIZES } from "../../../tokens";

export const ThumbnailContainer = styled.div`
  display: flex;
  margin: 0px 80px 20px 80px;

  @media (min-width: ${SIZES.BREAK_LG}) {
    width: 500px;
  }

  @media (max-width: ${SIZES.BREAK_LG}) {
    width: 500px;
  }

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    width: 400px;
    margin: 30px 40px 0;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 200px;
    margin: 30px 20px 0;
  }
`;

export const ThumbnailImage = styled.img`
  object-fit: contain;
  width: 100%;
`;
