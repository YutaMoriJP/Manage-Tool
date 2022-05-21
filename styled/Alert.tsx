import styled from "styled-components";

const Alert = styled.div.attrs((props) => ({ role: "alert" }))`
  color: var(--alert);
  font-weight: 600;
  ${({ $css }) => $css}
`;

export default Alert;
