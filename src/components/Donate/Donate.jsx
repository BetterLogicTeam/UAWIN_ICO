import React from "react";
import "./Donate.css";
import qr from "../Assets/qr.png"
export default function Donate() {
  return (
    <div className="main_donate_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white">
            <h1 className="donte_heaind">Feel like donating?</h1>
            <p>
              We’re constantly improving and making the project better. If you
              want to support us - feel free to donate or contact us to share
              your ideas on how we can become even better.
            </p>
            <div className="row">

                <div className="col-md-6 mt-4 mt-md-0">
                    <button className="join_us_buttton">Join Us</button>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                    <button className="partner_with_us">Partner With Us</button>
                </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 justify-content-center d-flex">
          <span className="white_box">
            <img src={qr} alt="" className="w-100" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
