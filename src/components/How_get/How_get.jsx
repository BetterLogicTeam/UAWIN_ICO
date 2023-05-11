import React from "react";
import "./How_get.css";
import v from "../Assets/v.png";
import left_get_pic from "../Assets/to_get_uper_left.png";
import car from "../Assets/car.png";
import Connect_wallet from "../Connect_wallet/Connect_wallet";
import { useSelector } from "react-redux";
import get_end from '../Assets/get_end_right.png';

export default function How_get() {
  const [modalShow, setModalShow] = React.useState(false);
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );

  return (
    <div className="main_how_to_get pb-5" id="how_get">
      <div className="d-flex justify-content-between" >
        <img src={left_get_pic} alt="" className="left_get_ppic" />
        <img src={v} alt="#" className="get_blue" />
      </div>
      <div className="container for_get_uprre">
        <h1 className="text-white fw-bold text-center how_to_title ">
          How to get <span className="uawin px-1"> $UAWIN? </span>
        </h1>
        <div className="row justify-content-center align-items-center pt-5">
          <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
            <img src={car} className="w-100" alt="" />
          </div>
          <div className="col-md-6 text-white" data-aos="fade-left" data-aos-duration="2000">
            <h1 className="text-white fw-bold text-start connect_w_title">Connect Wallet</h1>
            <ol className="hol ps-3">
              <li className="how_detail_point all_gary">
                On Google Chrome, visit metamask.io to download the extension
                and set up a wallet. Or use WalletConnect. Both by selecting
                “Connect Wallet”
              </li>

              <li className="how_detail_point all_gary">
                Acquire Ethereum or transfer it to your wallet address from
                another wallet (e.g. Coinbase or Binance).
              </li>
              <li className="how_detail_point all_gary">
                Click Connect Wallet, enter the amount of $ETH you would like to
                swap for $UAWIN and then Swap.
              </li>
            </ol>

            <div className="d-flex justify-content-between">

<div>
            <button
              className="cooncet_wallate mt-5"
              onClick={() => setModalShow(true)}
            >
              {acc?.startsWith("0x")
                ? acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4): "Connect Wallet"}{" "}
            </button>
            <Connect_wallet
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            </div>

            <img src={get_end} alt="" className="wu_bbtn mt-5" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
