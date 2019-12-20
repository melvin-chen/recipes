import { Typography, Input, Select } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

const { Title } = Typography;
const { Option } = Select;

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

export const FilterTextInputContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    flex-direction: column;
  }
`;

export const TextInputContainer = styled.div`
  flex-direction: column;
`;

export const TextInputTitle = styled(TextInputContainer)`
  width: 40%;
  margin-right: 10px;

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const TextInputTags = styled(TextInputContainer)`
  width: 30%;
  margin-right: 10px;

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 100%;
    margin-top: 15px;
    margin-right: 0;
  }
`;

export const FilterInput = styled(Input)`
  &.ant-input {
    width: 100%;
  }
`;

export const InputTitle = styled(Title)`
  &.ant-typography {
    font-size: 1.25em;
  }
`;

export const FilterSelectContainer = styled.div`
  width: 30%;

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 100%;
    margin-top: 15px;
  }
`;

export const FilterSelect = styled(Select)`
`;

export const FilterOption = styled(Option)`
`;
