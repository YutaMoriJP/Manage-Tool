import styled from "styled-components";

const Button = styled.button<{ $variant?: string }>`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  background: ${({ $variant }) => `var(--${$variant || "primary"}-color)`};
  border-radius: 5px;
  transition: all 700ms ease-in-out;
  color: var(--text-primary);
  ${({ $css }) => $css};

  &:focus {
    box-shadow: ${({ $variant }) => `0 0 0 2px var(--${$variant || "primary"}-color-dark)`};
  }
  &:hover {
    transform: scale(1.06);
  }
`;

export default Button;
