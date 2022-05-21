import * as React from "react";
import styled from "styled-components";

import type { ReactNode } from "react";

interface ICard extends Omit<React.ComponentProps<"div">, "ref"> {
  children: ReactNode;
  onClick: () => void;
}

const StyledContainer = styled.div`
  box-shadow: 100px 100px 80px rgba(0, 0, 0, 0.07);
  padding: 10px 20px;
  border-radius: 6px;
  background: var(--bg-secondary);
  transition: all 500ms ease-in-out;
  cursor: pointer;
  flex: 1 1 200px;
  min-width: 280px;
  max-width: 300px;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

export const StyledHeader = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const Card = ({ children, onClick, ...rest }: ICard) => (
  <StyledContainer onClick={onClick} {...rest}>
    {children}
  </StyledContainer>
);

export default Card;
