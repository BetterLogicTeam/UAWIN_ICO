import React from "react";
import "./Tokenomic.css";
import graph_win from "../Assets/graph.png";
import blu_detail from "../Assets/blue_details.png";
import yellow_detail from "../Assets/yellow_details.png";

function Tokenomic() {
  return (
    <div style={{ background: "#0E1924" }} id="Tokenomic">
      <div className="container">
        <h2 className="text-white pt-5">Tokenomic</h2>
        <div className="row pt-5 end_graph">
          <div className="col-lg-6 text-white">
            <div className="graph_uper">
              <img src={graph_win} alt="" className="graph_cor" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="graph_detail">
              <div className="graph_detail_1 mt-4">
                <img src={blu_detail} alt="#" className="blue_detail_graph" />
              </div>
              <div className="graph_detail_2 mt-4">
                <img
                  src={yellow_detail}
                  alt=""
                  className="yellow_detail_graph"
                />
              </div>
            </div>
          </div>

          <hr className="text-white mt-5" />
        </div>

        <div className="row pb-5">
          <div className="col-lg-3">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token supply</h2>
              <p className="writen_title_details">
                Total UAWIN token supply is 5 billion tokens, where 10% is
                reserved for the team with a half a year lock period and all the
                rest is distributed among the community.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token Utility</h2>
              <p className="writen_title_details">
                UAWIN token’s utility is pure representation of an event and the
                ability to invest in it.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token Distribution</h2>
              <p className="writen_title_details">
                Private sale is followed by the Pre-sale stage, after those two
                both Public Sale and CEX listings are launched. Airdrop program
                is always active and serves charity purpose only.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token Burns</h2>
              <p className="writen_title_details">
                Burning is to be initiated after the victory event happens.
                Holders of the tokens are gonna be eligible to participate in
                DAO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomic;
