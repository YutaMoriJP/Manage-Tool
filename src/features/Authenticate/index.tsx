import { useDispatch, useSelector } from "../../../reduxApp/hooks";
import { authenticate } from "../../../features/auth/auth.slice";
import styled, { css } from "styled-components";
import Button from "../../../styled/StyledButton";
import Container from "../../../styled/Center";
import Head from "next/head";
import { useFormik } from "formik";
import Alert from "../../../styled/Alert";

type AuthenticateProps = { children: React.ReactNode };
type FormValues = { userName: string; password: string };

const buttonStyle = css`
  font-weight: 600;
  max-width: fit-content;
  margin-left: auto;
`;

const alertStyle = css`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  margin: auto;
`;

const Input = styled.input`
  padding: var(--sm);
  margin-bottom: var(--md);
  border-radius: var(--xm);
  border: 0;

  &:focus {
    box-shadow: var(--shadow-lg);
    background: white;
  }
`;

// formik validator function
const validate = (values: FormValues) => {
  const errors: FormValues = { userName: "", password: "" };

  errors.userName = "";
  if (values.userName.length < 3) errors.userName = "Username is too short";

  errors.password = "";
  if (values.password.length < 3) errors.password = "Password is too short";

  return errors;
};

const Authenticate = ({ children }: AuthenticateProps) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.authentication.isAuthenticated);

  const formik = useFormik({
    initialValues: { userName: "", password: "" },
    validate,
    onSubmit: async (values) => {
      // const body = JSON.stringify(values);

      try {
        // server authentication endpoint
        // const authenticated = (await axios.post("/authenticateUser/", body)) as boolean;
        // dispatch(authenticate(authenticated));
        dispatch(authenticate(true));
      } catch (error) {
        console.error(error);

        // send error message
      }
    }
  });

  if (!isAuthenticated)
    return (
      <>
        <Head>
          <title>Login - Management</title>
        </Head>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <label htmlFor="userName">USERNAME</label>
            <Input
              type="text"
              id="userName"
              aria-label="Username"
              name="userName"
              placeholder="USERNAME"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              required
            />

            {formik.touched.userName && formik.errors.userName ? (
              <Alert $css={alertStyle}>{formik.errors.userName}</Alert>
            ) : null}

            <label htmlFor="password">PASSWORD</label>
            <Input
              type="text"
              id="password"
              aria-label="Password"
              name="password"
              placeholder="PASSWORD"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />

            {formik.touched.password && formik.errors.password ? (
              <Alert $css={alertStyle}>{formik.errors.password}</Alert>
            ) : null}

            <Button $css={buttonStyle}>LOGIN</Button>
          </Form>
        </Container>
      </>
    );

  return <>{children}</>;
};

export default Authenticate;
