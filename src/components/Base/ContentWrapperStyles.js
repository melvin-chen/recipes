import styled from "styled-components";

export const CustomContentWrapper = styled.div`
  & .ant-typography, li, h1, p, a, .ant-tag {
    transition: color 300ms;
    color: ${props => (props.isDark ? "white" : "black")};
  }

  .ant-tag {
    transition: background-color 300ms;
    background-color: ${props => (props.isDark ? "#232222" : "white")};

  }



`;
