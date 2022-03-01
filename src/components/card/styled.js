import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  min-height: 10rem;
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: right 0.5rem top;
`;

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

  .type,
  .menu {
    font-weight: ${({ theme }) => theme.fw500};
  }

  .type {
    font-size: 1.125rem;
    line-height: 1.25rem;
    color: #fff;
  }

  .menu {
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.clrTextDark};
  }

  .time {
    font-weight: ${({ theme }) => theme.fw300};
    font-size: 2rem;
    line-height: 2.4rem;
    color: #fff;
  }

  .last-week {
    font-weight: ${({ theme }) => theme.fw300};
    font-size: 0.9375rem;
    line-height: 1.125rem;
    color: ${({ theme }) => theme.clrTextDark};
  }
`;
