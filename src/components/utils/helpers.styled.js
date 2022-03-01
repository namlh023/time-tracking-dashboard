import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alginItem || "center"};
  gap: ${(props) => props.gap || 0};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  height: 100%;
  width: 100%;
`;
