import { Typography, Switch } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { SIZES } from "../../../tokens";

const { Title, Text } = Typography;

export const IndexHeader = styled(Title)`
  box-sizing: border-box;
  padding: 30px 80px 0;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding: 30px 40px 0;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    padding: 30px 20px 0;
  }
`;

export const IndexSubheader = styled(Text)`
  box-sizing: border-box;
  padding: 10px 80px 0;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding: 0 40px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    padding: 0 20px;
  }
`;


export const DarkSwitch = styled(Switch)`
  &.ant-switch {
    z-index: 1;
    position: fixed;
    bottom: 15px;
    right: 15px;
    background-color: #ffa41b;
    opacity: 0.25;

    &:hover {
      opacity: 1;
    }
  }
  &.ant-switch-checked {
    background-color: #6b2ad2;
  }
  --antd-wave-shadow-color: #6b2ad2;
`;

export const CustomContentWrapper = styled.div`
`;