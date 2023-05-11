import React from "react";
import "./Home_uwin.css";
import corner_1 from "../Assets/blu_corner.png";
import corner_2 from "../Assets/yellow_corner.png";
import yello_coins from "../Assets/right_coin.png";
import dark_win from "../Assets/dark_win.png";
import Exchange_modal from "../Exchange_modal/Exchange_modal";

function Home_uwin({modalShow,setModalShow}) {
  const [SwapModel, setSwapModel] = React.useState(false);
  return (
    <div style={{ background: "#04101C" }} id="Home">
      <div className="container-fluid px-0" >
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="left_corner text-start">
              <img src={corner_1} alt="#" className="blu_corner" />
            </div>
            <div className="unique_part " data-aos="fade-up" data-aos-duration="2000">
              <div className="text-start main_title_uper">
                <h1 className="opp_title">
                  Historical Event, <br /> Unique{" "}
                  <span className="opp">Opportunity</span>
                </h1>
                <p className="invest mb-0 mt-3 mt-md-4 all_gary">
                  Invest in the most expected geopolitical event that is about
                  to change the future of the 21st century.
                </p>
                <button
                  className="btn get_buttn mt-4"
                  onClick={() => setSwapModel(true)}
                >
                  Get $UAWIN
                </button>
                <Exchange_modal
                  show={SwapModel}
                  onHide={() => setSwapModel(false)}
                  setModalShow={setModalShow} modalShow={modalShow}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="con_part mt-0 mt-md-5" data-aos="zoom-in" data-aos-duration="2000" >
              <img src={yello_coins} alt="#" className="yellow_coin" />
            </div>
            <div className="right_corner text-end">
              <img src={corner_2} alt="#" className="yellow_corner" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12" style={{ background: "#0E1924" }}>
            <div className="join_part pb-1">
              <h4 className="join_title">
                Join the biggest whales - world leaders
              </h4>
              <p className="join_details all_gary">
                Victory of Ukraine is bet on by the world’s top leaders,
                invested in by the world’s leading countries and <br /> plays a
                definitive role in modern world’s geopolitical future.
                Once-in-a-lifetime event that is about to <br /> change
                everything.
              </p>
              <div className="dark_win">
                <img src={dark_win} alt="#" className="win_drk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home_uwin;
