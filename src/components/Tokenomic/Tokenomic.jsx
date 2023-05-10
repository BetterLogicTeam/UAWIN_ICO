import React from "react";
import "./Tokenomic.css";
import graph_win from "../Assets/graph.png";
import blu_detail_1 from "../Assets/blue_loder_1.png";
import blu_detail_2 from "../Assets/blue_loder_2.png";
import blu_detail_3 from "../Assets/blue_loder_3.png";
import yellow_detail_1 from "../Assets/orange_loder_1.png";
import yellow_detail_2 from "../Assets/orange_loder_2.png";
import yellow_detail_3 from "../Assets/orange_loder_3.png";
import yellow_detail_4 from "../Assets/orange_loder_4.png";

function Tokenomic() {
  return (
    <div style={{ background: "#0E1924" }} id="Tokenomic">
      <div className="container">
        <h2 className="text-white pt-5 fw-bold toko_title">Tokenomic</h2>
        <div className="row pt-5 end_graph">
          <div className="col-lg-6 text-white">
            <div className="graph_uper ">
              <img src={graph_win} alt="" className="graph_cor anim" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="graph_detail">
              <div className="graph_detail_1 mt-4">
                <img src={blu_detail_1} alt="#" className="blue_detail_graph anim" />
                <img src={blu_detail_2} alt="#" className="blue_detail_graph anim" />
                <img src={blu_detail_3} alt="#" className="blue_detail_graph anim" />
              </div>
              <div className="graph_detail_2 mt-4">
                <img src={yellow_detail_1} alt="" className="yellow_detail_graph anim"/>
                <img src={yellow_detail_2} alt="" className="yellow_detail_graph anim"/>
                <img src={yellow_detail_3} alt="" className="yellow_detail_graph anim"/>
                <img src={yellow_detail_4} alt="" className="yellow_detail_graph anim"/>
              </div>
            </div>
          </div>

          <hr className="text-white mt-5" />
        </div>

        <div className="row pb-5">
          <div className="col-lg-3" data-aos="flip-right" data-aos-duration="3000">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token supply</h2>
              <p className="writen_title_details all_gary">
                Total UAWIN token supply is 5 billion tokens, where 10% is
                reserved for the team with a half a year lock period and all the
                rest is distributed among the community.
              </p>
            </div>
          </div>
          <div className="col-lg-3" data-aos="flip-right" data-aos-duration="3000">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token Utility</h2>
              <p className="writen_title_details all_gary ">
                UAWIN token’s utility is pure representation of an event and the
                ability to invest in it.
              </p>
            </div>
          </div>
          <div className="col-lg-3 fr_bord" data-aos="flip-right" data-aos-duration="3000">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token Distribution</h2>
              <p className="writen_title_details all_gary">
                Private sale is followed by the Pre-sale stage, after those two
                both Public Sale and CEX listings are launched. Airdrop program
                is always active and serves charity purpose only.
              </p>
            </div>
          </div>
          <div className="col-lg-3 fr_bord" data-aos="flip-right" data-aos-duration="3000">
            <div className="graph_detail_writen_main">
              <h2 className="writen_title">Token Burns</h2>
              <p className="writen_title_details all_gary">
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
