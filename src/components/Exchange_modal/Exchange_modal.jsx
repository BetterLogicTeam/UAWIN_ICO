import React, { useEffect, useState } from "react";
import "./Exchange_modal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import busd from "../Assets/BUSD.png";
import bnb from "../Assets/bnb.png";

import selling_pic_2 from "../Assets/binance-usd-busd-seeklogo.com.svg";
import buying_pic from "../Assets/buying_ethr.png";
import { useSelector } from "react-redux";
import {
  Presale_Abi,
  Presale_Contract,
  Presale_Token_Abi,
  Presale_Token_Address,
} from "../../Contracts/contract";
import Web3 from "web3";
import { Input } from "antd";
import { toast } from "react-hot-toast";
import Connect_wallet from "../Connect_wallet/Connect_wallet";

function Exchange_modal(props) {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );

  const [getBNB_Value, setgetBNB_Value] = useState("");
  const [showValue, setshowValue] = useState("");
  const [select_totken, setselect_totken] = useState("bnb");
  const [Spinner, setSpinner] = useState(false);

  const BuywithToken = async () => {
    try {
      setSpinner(true);
      if (acc == null) {
        toast.error("Connect Wallet First");
        props.onHide()
        props.setModalShow(true)

        setSpinner(false);
      } else {
        if (getBNB_Value == "") {
          toast.error("Please Enter Token First ! ");
          setSpinner(false);

        } else {
          setSpinner(true);

          let Presale_ContractOf = new web3.eth.Contract(
            Presale_Abi,
            Presale_Contract
          );
          let BUSD_ContractOf = new web3.eth.Contract(
            Presale_Token_Abi,
            Presale_Token_Address
          );
          let value = web3.utils.toWei(getBNB_Value.toString());

          if (select_totken == "bnb") {
            await Presale_ContractOf.methods.BuyTokenWithBNB().send({
              from: acc,
              value: value,
            });
            toast.success("Buy Successfully! 🎉");
          setgetBNB_Value("");
          setSpinner(false);


          } else {
            await BUSD_ContractOf.methods
              .approve(Presale_Contract, value.toString())
              .send({
                from: acc,
              });
            toast.success("Approved Successfully! 🎉");
            await Presale_ContractOf.methods
              .BuyTokenWithBUSD(value.toString())
              .send({
                from: acc,
              });
            toast.success("Buy Successfully! 🎉");
          }
          setSpinner(false);
          setgetBNB_Value("");
        }
      }
    } catch (error) {
      console.log(" Error While Buy with BNB", error);
      toast.error(error.message)
      setSpinner(false);
    }
  };

  const Get_Token_Value = async () => {
    try {
      if (getBNB_Value == "") {
        setshowValue("");
      }
      const webSupply = new Web3("https://data-seed-prebsc-1-s2.binance.org:");
      let Presale_ContractOf = new webSupply.eth.Contract(
        Presale_Abi,
        Presale_Contract
      );
      let BUSD_ContractOf = new webSupply.eth.Contract(
        Presale_Token_Abi,
        Presale_Token_Address
      );
      let value = webSupply.utils.toWei(getBNB_Value.toString());
      let getValue;
      if (select_totken == "bnb") {
        getValue = await Presale_ContractOf.methods
          .getTokenvalueperBNB(value.toString())
          .call();
      } else {
        getValue = await Presale_ContractOf.methods
          .getTokenvalueperBUSD(value.toString())
          .call();
      }
      getValue = webSupply.utils.fromWei(getValue.toString());
      console.log("getValue", getValue);
      setshowValue(getValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Get_Token_Value();
  }, [getBNB_Value, select_totken]);

  return (
    <div>
      <Connect_wallet show={props.modalShow} onHide={() =>props.setModalShow(false)} />

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="main_modal"
      >
        <Modal.Header className="modeccc">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="pick_modal fw-bold"
          >
            Exchange
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Form.Label className="all_gary exten_headings">Selling</Form.Label>
          <div className="d-flex align-items-center justify-content-evenly">
            <Input
              type="text"
              name="selling"
              className="slng fr_inside ps-3"
              onChange={(e) => setgetBNB_Value(e.target.value)}
            />
            <h6 className="mx mb-0">MAX</h6>

            <img
              src={select_totken == "bnb" ? bnb : busd}
              alt=""
              className="selling_cor"
            />
            <div className="d-flex align-items-center ">
              <Form.Select
                aria-label="Default select example"
                className="block_coin text-white"
                onChange={(e) => setselect_totken(e.target.value)}
              >
                {/* <option>Open this select men</option> */}
                <option value="bnb" className="text-white d-flex gap-2">
                  <p className="mb-0 text-white">BNB</p>
                </option>
                <option value="busd" className="text-white d-flex gap-2">
                  <h6 className="mb-0 bnb_selling text-white">BUSD</h6>
                </option>
              </Form.Select>
            </div>
          </div>

          <Form.Label className="all_gary exten_headings mt-4">
            Buying
          </Form.Label>
          <div className="d-flex align-items-center justify-content-evenly mt-2">
            <Input
              type="text"
              name="buying"
              className="slng ps-3 "
              value={showValue}
            />
            <img src={buying_pic} alt="" className="" width="7%" />
            <h6 className="mb-0 bnb_selling">UAWIN</h6>
          </div>

          <div className=" mt-4 swap_btn">
            <Button
              className="swp text-black p-2"
              onClick={ Spinner ? ()=>Get_Token_Value(): () => BuywithToken()}
            >
              {Spinner ? (
                <>
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                "Swap"
              )}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Exchange_modal;
