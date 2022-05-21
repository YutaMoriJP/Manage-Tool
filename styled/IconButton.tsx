import styled from "styled-components";

const IconButton = styled.button`
  all: unset;
  background-color: transparent;
  width: fit-content;
  padding: 10px;
  border-radius: 9999px;
  cursor: pointer;
  overflow: visible;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default IconButton;
