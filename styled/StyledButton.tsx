import styled, { css } from "styled-components";
import type { FlattenSimpleInterpolation } from "styled-components";

const Button = styled.button<{ $variant?: string; $baseStyle?: FlattenSimpleInterpolation }>`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  background: ${({ $variant }) => `var(--${$variant || "primary"}-color)`};
  border-radius: 5px;
  transition: all 600ms ease-in-out;
  color: var(--text-primary);

  &:focus {
    box-shadow: ${({ $variant }) => `0 0 0 2px var(--${$variant || "primary"}-color-dark)`};
  }
  &:hover {
    transform: scale(1.1);
  }

  ${(props) => props.$baseStyle}
`;

export default Button;
