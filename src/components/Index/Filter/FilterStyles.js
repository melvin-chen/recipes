import { Typography, Input, Radio } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction:column;
  box-sizing: border-box;
  padding: 30px 80px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding: 30px 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    padding: 15px 20px;
  }
`;

export const FilterTextInputContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    flex-direction: column;
  }
`;

export const FilterInput = styled(Input)`
  &.ant-input {
      width: 60%;
      margin-right: 10px;
  }
`;

export const RadioContainer = styled.div`
  margin-top: 15px;
`;

export const RadioGroup = styled(Radio.Group)`
  &.ant-radio-group{
    display: flex;
  }
`;

export const RadioButton = styled(Radio.Button)`
  &.ant-radio-button-wrapper{
    flex-grow: 1;
    text-align: center;
  }
`;