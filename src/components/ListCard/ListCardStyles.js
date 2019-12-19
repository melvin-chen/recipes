import styled from "styled-components";

export const ListCardContainer = styled.div``;

export const CardContainer = styled.div`
`;

export const LCImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
