import { Col } from "antd";
import styled from "styled-components";
import { SIZES } from "../../../tokens";

export const StepsListContainer = styled(Col)`
  margin: 0px 80px 0px 80px;
  .ant-popover-inner-content {
    padding: 0;
  }
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin: 30px 40px 0;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    margin: 30px 20px 0;
  }
`;
