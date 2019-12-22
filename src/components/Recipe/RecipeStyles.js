import styled from "styled-components";
import { Row, Col, Typography } from "antd";
import { SIZES } from "../../tokens";

const { Title } = Typography;

export const RecipeContainer = styled(Row)`
  padding: 30px 80px 0;

  @media (max-width: ${SIZES.BREAK_LG}) {
    padding: 30px 80px 0;
  }

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding: 30px 40px 0;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    padding: 30px 20px 0;
  }
`;

export const RecipeLeft = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const RecipeRight = styled(Col)``;

export const RecipeHeader = styled(Title)`
  &.ant-typography {
    margin-bottom: 10px;
  }
`;
