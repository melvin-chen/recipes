import { Typography } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

const { Title } = Typography;

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 23%;
  margin-top: 30px;
  padding: 25px;

  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #0000000a;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    width: 30%;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    width: 45%;
  }
`;

export const LCTitle = styled(Title)`
  &.ant-typography {
    margin: 40px 0 10px;
    font-size: 1.5em;
    text-align: center;

    @media (max-width: ${SIZES.BREAK_TABLET}) {
      font-size: 1.25em;
    }
  }
`;

export const LCImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  height: 200px;
  width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    height: 150px;
    width: 150px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    height: 100px;
    width: 100px;
  }
`;
