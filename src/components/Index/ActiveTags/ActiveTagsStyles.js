import { Tag, Typography } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";
import { Link } from "gatsby";

const { Title } = Typography;

export const ActiveTagsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
box-sizing: border-box;
padding: 0 80px 30px;

@media (max-width: ${SIZES.BREAK_TABLET}) {
  padding: 0 40px 30px;
}

@media (max-width: ${SIZES.BREAK_MOBILE}) {
  padding: 15px 20px 30px;
}
`;

export const ActiveTag = styled(Tag)`
    &:hover {
        cursor: pointer;
    }
`;