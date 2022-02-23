import { createGlobalStyle } from "styled-components";

export const RootStyle = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.ffPrimary};
        background-color: ${({ theme }) => theme.clrBg}
    }
`;
