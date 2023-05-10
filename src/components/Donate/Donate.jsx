import React from "react";
import "./Donate.css";
import qr from "../Assets/qr.png"
export default function Donate() {
  return (
    <div className="main_donate_bg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-white" data-aos="fade-right" data-aos-duration="2000">
            <h1 className="donte_heaind text-start">Feel like donating?</h1>
            <p className="donate_detaills all_gary mt-4">
              We’re constantly improving and making the project better. If you
              want to support us - feel free to donate or contact us to share
              your ideas on how we can become even better.
            </p>
            <div className="row mt-5">

                <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-md-end justify-content-center">
                    <button className="join_us_buttton">Join Us</button>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-md-start justify-content-center">
                    <button className="partner_with_us">Partner With Us</button>
                </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 justify-content-center d-flex">
          <span className="white_box" data-aos="zoom-in" data-aos-duration="2000">
            <img src={qr} alt="" className="w-100" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
