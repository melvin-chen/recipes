import { Col } from "antd";
import styled from "styled-components";
import { SIZES } from "../../../tokens";

export const StepsListContainer = styled(Col)`
  margin: 0px 80px 0px 80px;
  .ant-popover-inner-content {
    padding: 0;
  }
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin: 0px 40px 0;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    margin: 0px 20px 0;
  }
`;

export const OrderedStep = styled.ol`
  padding-left: 0px;
  margin-left: 60px;
`;

export const OrderedList = styled.li`
  padding-left: 5px;
`;
