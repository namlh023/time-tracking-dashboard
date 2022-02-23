import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alginItem || "center"};
  height: 100%;
  width: 100%;
`;
