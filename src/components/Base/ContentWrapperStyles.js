import styled from "styled-components";

export const CustomContentWrapper = styled.div`
  & .ant-typography,
  li,
  h1,
  p,
  a,
  .ant-tag,
  .ant-select-arrow,
  .ant-select-selection__placeholder,
  .ant-input::placeholder {
    transition: color 300ms;
    color: ${props => (props.isDark ? "#fff" : "#000")};
  }

  & .ant-input,
  .ant-select-selection {
    background-color: ${props => (props.isDark ? "#000" : "#fff")};
  }

  .ant-tag {
    transition: background-color 300ms;
    background-color: ${props => (props.isDark ? "#232222" : "white")};
    margin-bottom: 8px;
  }
`;
