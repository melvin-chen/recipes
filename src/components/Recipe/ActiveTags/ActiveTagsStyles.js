import { Tag, Typography } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

export const ActiveTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const ActiveTag = styled(Tag)`
  &:hover {
    cursor: ${props => (props.closable ? "pointer" : "auto")};
  }
`;