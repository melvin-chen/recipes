import styled from "styled-components";

export const CustomContentWrapper = styled.div`
  & .ant-typography {
    transition: color 300ms;
    color: ${props => (props.isDark ? "white" : "black")};
  }
`;
