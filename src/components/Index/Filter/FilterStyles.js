import { Typography, Input } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 30px 80px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding: 30px 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    padding: 15px 20px;
  }
`;

export const FilterInput = styled(Input)``;