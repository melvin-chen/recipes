import { Typography } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

const { Title, Text } = Typography;

export const IndexHeader = styled(Title)`
  box-sizing: border-box;
  margin: 30px 80px 0;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin: 0 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    margin: 0 20px;
  }
`;

export const IndexSubheader = styled(Text)`
  box-sizing: border-box;
  margin: 10px 80px 0;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin: 0 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    margin: 0 20px;
  }
`;
