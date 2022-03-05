import styled from "styled-components";

export const StyledBody = styled.div`
  transition: color 300ms, background-color 300ms;
  margin: 0 auto;
  padding-top: 0;

  & .ant-typography {
    color: ${props => (props.isDark ? "white" : "black")};
  }
`;
