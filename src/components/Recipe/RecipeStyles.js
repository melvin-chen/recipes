import styled from "styled-components";
import { Row, Col, Typography } from 'antd';

const { Title } = Typography

export const RecipeContainer = styled(Row)`
  padding: 0 80px;
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