import { Typography } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";
import { Link } from "gatsby";

const { Title } = Typography;

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 30px 80px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding: 30px 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    padding: 15px 20px;
  }
`;

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 23%;
  margin-top: 30px;
  padding: 25px;

  background-clip: content-box;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #0000001c;
  transition: box-shadow 100ms;

  &:hover {
    border-color: #40a9ff;
    // border: 1px solid #40a9ff;
    box-shadow: 0 0 0 1px #40a9ff, 0 0 0 3px rgba(24, 144, 255, 0.2);
  }

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    width: 30%;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const LCTitle = styled(Title)`
  &.ant-typography {
    margin: 40px 0 10px;
    font-size: 1.5em;
    text-align: center;

    @media (max-width: ${SIZES.BREAK_TABLET}) {
      font-size: 1.25em;
      margin: 30px 0 10px;
    }

    @media (max-width: ${SIZES.BREAK_TABLET}) {
      margin: 30px 0 0;
    }
  }
`;

export const LCImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  height: 200px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 3px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    height: 150px;
    width: 100%;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    height: 200px;
    width: 100%;
  }
`;
