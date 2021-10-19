import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, pass);
    if (pass.length < 6) {
      setError("Password must be 6 characters ");
      return;
    }
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        history.push(redirect_url);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2 className="mt-3">Sign In WIth your Email</h2>
      <Container className="text-start my-5 card  ">
        <Form className="shadow p-4" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="pt-2">
            New to this site ? <Link to="/register">Create Account</Link>
          </p>
        </Form>

        <h3 className="my-3">Or </h3>
        <Button onClick={handleGoogleLogin}>Google Sign in</Button>
      </Container>
    </div>
  );
};

export default Login;
