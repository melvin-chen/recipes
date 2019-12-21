import { Col } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

export const IngredientsAndToolsListContainer = styled(Col)`
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

export const ItemsListContainer = styled.div`
  margin-bottom: 20px;
`;

export const IngredientsListItem = styled.li`
  margin-left: 45px;
`;

export const Message = styled.p`
  margin-left: 45px;
`;
