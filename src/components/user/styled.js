import styled from "styled-components";

export const StyledUser = styled.div`
  background-color: ${({ theme }) => theme.clrBgCard};
  margin-bottom: 2rem;
  border-radius: 0.8rem;
`;

export const UserInfo = styled.div`
  background-color: ${({ theme }) => theme.clrUser};
  padding: 1.5rem;
  border-radius: 0.8rem;

  img {
    width: 4rem;
    height: 4rem;
    border: 0.2rem solid #fff;
    border-radius: 50%;
  }

  .des {
    color: ${({ theme }) => theme.clrTextLight};
    font-size: 0.9375rem;
    line-height: 1.125rem;
  }

  .username {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: ${({ theme }) => theme.fw300};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.clrTextDark};

  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
  }
`;
