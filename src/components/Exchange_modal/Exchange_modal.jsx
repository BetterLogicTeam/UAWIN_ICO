import React from "react";
import "./Exchange_modal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import selling_pic from "../Assets/ethr.png";
import buying_pic from "../Assets/buying_ethr.png";

function Exchange_modal(props) {
  return (
    <div>
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
        <Modal.Body className="ps-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="all_gary exten_headings">
                Selling
              </Form.Label>
              <div className="d-flex align-items-center gap-2">
                <Form.Control
                  type="text"
                  name="selling"
                  className="slng fr_inside"
                />
                <h6 className="mx mb-0">MAX</h6>
                <img src={selling_pic} alt="" className="selling_cor" />
                <h6 className="mb-0 bnb_selling">BNB</h6>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="all_gary exten_headings">
                Buying
              </Form.Label>
              <div className="d-flex align-items-center gap-2">
                <Form.Control type="text" name="buying" className="slng" />
                <img src={buying_pic} alt="" className="buying_cor" />
                <h6 className="mb-0 bnb_selling">UAWIN</h6>
              </div>
            </Form.Group>
            <div className="ps-5"> 
              <Button className="swp text-black ms-5" type="submit">
                Swap
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Exchange_modal;
