import styled, { FlattenSimpleInterpolation } from "styled-components";

const Container = styled.div<{ $baseStyle?: FlattenSimpleInterpolation; $direction?: string }>`
  width: 100%;
  min-height: 100vh;
  background: var(--primary-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ $direction = "row" }) => $direction};
  ${({ $baseStyle }) => $baseStyle};
`;

export default Container;
