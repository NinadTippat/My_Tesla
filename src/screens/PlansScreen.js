import React from "react";
import "./PlansScreen.css";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

const PlansScreen = () => {
  const history = useHistory();

  return (
    <div className="plansScreen">
      <Fade bottom cascade>
        <div className="plansScreen__plan">
          <div className="plansScreen__info">
            <h5>Model S</h5>
          </div>

          <button onClick={() => history.push("/")}>Book</button>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="plansScreen__plan">
          <div className="plansScreen__info">
            <h5>Model X</h5>
          </div>

          <button onClick={() => history.push("/")}>Book</button>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="plansScreen__plan">
          <div className="plansScreen__info">
            <h5>Model Y</h5>
          </div>

          <button onClick={() => history.push("/")}>Book</button>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="plansScreen__plan">
          <div className="plansScreen__info">
            <h5>Model 3</h5>
          </div>

          <button onClick={() => history.push("/")}>Book</button>
        </div>
      </Fade>
    </div>
  );
};

export default PlansScreen;
