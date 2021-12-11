import { useDispatch, useSelector } from "../../app/hooks";
import { authenticate } from "../../features/auth/auth.slice";
import styled, { css } from "styled-components";
import Button from "../../styled/StyledButton";

const baseStyle = css`
  font-weight: 600;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--primary-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

type AuthenticateProps = { children: React.ReactNode };

const Authenticate = ({ children }: AuthenticateProps) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.authentication.isAuthenticated);
  if (!isAuthenticated)
    return (
      <Container>
        <Button $baseStyle={baseStyle} onClick={() => dispatch(authenticate())}>
          LOGIN
        </Button>
      </Container>
    );
  return children;
};

export default Authenticate;
