import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import Tada from "react-reveal/Tada";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div data-aos="fade-up" className="signupScreen">
      <form>
        <Tada>
          <h1>Sign In</h1>
        </Tada>
        <label htmlFor="">E-mail</label>
        <input ref={emailRef} type="email" />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Tesla? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
