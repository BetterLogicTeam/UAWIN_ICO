import React from "react";
import "./Why_uwin.css";
import side_uwin from '../Assets/side_win.png'

function Why_uwin() {
  return (
    <div style={{ background: "#04101C" }} id="Why_UAWIN">
      <div className="container">
        <div className="why_title">
          <h2 className="text-white fw-bold why_dluwin">
            Why <span className="dollar">$UAWIN?</span>
          </h2>
          <p className="why_tye all_gary">
            Trusted technology, transparency and decentralization.
          </p>
        </div>
        <div className="row present">
          <div className="col-lg-6">
            <iframe data-aos="fade-right" data-aos-duration="2000" className="prt w-100" width="560" height="315" src="https://www.youtube.com/embed/8xySaUgIu4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>

          <div className="col-lg-6">
            <div className="under_hood" data-aos="fade-left" data-aos-duration="2000">
              <h2 className="hood_title text-start">Under the hood</h2>
              <p className="hood_details all_gary">
                $UAWIN is fully decentralized and owned by the community of
                holders. $UAWIN is built on Binance Smart Chain - industry’s
                most trusted blockchain and utilizes it’s best features as well
                as makes it easy to trade on almost every platform. 1% holders
                reward for every transaction and allocations pool for most
                active users foster the best crypto community under a brand that
                matters.
              </p>
            </div>
          </div>
            <img src={side_uwin} alt="" className="horizental" />
        </div>
      </div>
    </div>
  );
}

export default Why_uwin;
