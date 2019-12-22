import { Col } from "antd";
import styled from "styled-components";
import { SIZES } from "../../../tokens";

export const StepsListContainer = styled(Col)`
  width: 60%;
  .ant-popover-inner-content {
    padding: 0;
  }
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    width: 100%;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 100%;
  }
`;

export const OrderedStep = styled.ol`
  padding-left: 0px;
  margin-left: 30px;
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin-left: 17px;
  }
`;

export const OrderedList = styled.li`
  padding-left: 5px;
  padding-bottom: 8px;
  line-height: 1.25em;
`;
