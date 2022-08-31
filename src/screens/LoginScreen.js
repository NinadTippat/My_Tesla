import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUVhRbY2uqIuvAVc16ZfA5cKniZ8oU7esQnb4zeuPzabfukpsU3cltsW-9ixGFyd2U_c&usqp=CAU"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <Bounce left cascade>
              <h1>Welcome to Tesla</h1>
            </Bounce>
            <Bounce right cascade>
              <h3>The World's Most Valuable Electric Car Brand</h3>
            </Bounce>

            <div className="loginScreen__input">
              <Roll bottom cascade>
                <form>
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </Roll>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
