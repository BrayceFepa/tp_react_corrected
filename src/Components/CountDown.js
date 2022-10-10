import React from "react";
import Count from "./Count";

function CountDown() {
  return (
    <div className="count-down d-flex mt-5 justify-content-center" style={{ background: '#D8D9CF' }}>
      <img src="./images/black-hoodie-mockup_125540-877-removebg-preview.png"></img>
      <div className="my-3">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <span className="text-dark fw-bold display-3">Deal Of The Week</span>
          <div className="divider"></div>
        </div>

        <div className="counter mt-5 pt-5 d-flex justify-content-between">
          <Count number={1} txt={"Day"} />
          <Count number={24} txt={"Hours"} />
          <Count number={53} txt={"Minutes"} />
          <Count number={12} txt={"Seconds"} />
        </div>
      </div>
    </div>
  );
}

export default CountDown;
