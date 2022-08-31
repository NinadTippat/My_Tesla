import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";
import { useHistory } from "react-router-dom";
import Wobble from "react-reveal/Wobble";
import Rotate from "react-reveal/Rotate";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const history = useHistory();

  return (
    <div className="profileScreen">
      <div onClick={() => history.push("/")} className="profileScreen__body">
        <Wobble>
          <h1>Account</h1>
        </Wobble>
        <div className="profileScreen__info">
          <div className="profileScreen__details">
            <Rotate cascade>
              {" "}
              <h2>{user.email}</h2>
            </Rotate>
            <div className="profileScreen__plans">
              <h3>Book Your Electric Car</h3>
              <PlansScreen />
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
