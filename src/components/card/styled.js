import styled from "styled-components";
import iconPlay from "../../assets/images/icon-play.svg";

export const styledCard = styled.div`
  position: relative;
  min-height: 8rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.clrPlay};
  background-image: url(${iconPlay});
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: right 0.5rem top;
`;

export const Header = styled.div``;

export const Body = styled.div`
  background-color: ${({ theme }) => theme.clrBgCard};
  border-radius: 0.8rem;
  height: 80%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.8rem;

  ul {
    width: 100%;
  }
`;
