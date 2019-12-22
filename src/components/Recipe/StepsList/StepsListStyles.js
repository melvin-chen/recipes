import { Col } from "antd";
import styled from "styled-components";
import { SIZES } from "../../../tokens";

export const StepsListContainer = styled(Col)`
  width: 550px;
  .ant-popover-inner-content {
    padding: 0;
  }
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    // margin: 0px 40px 0;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    // margin: 0px 20px 0;
  }
`;

export const OrderedStep = styled.ol`
  padding-left: 0px;
  margin-left: 30px;
`;

export const OrderedList = styled.li`
  padding-left: 5px;
  padding-bottom: 8px;
  line-height: 1.25em;
`;
