import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import metamask from "../Assets/metamask.png"
import walletconnect from "../Assets/walletconnect.png"

export default function Connect_wallet(props) {
  return (
    <div>

<Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='main_modal'
    >
      <Modal.Header  className='modeccc'>
        <Modal.Title id="contained-modal-title-vcenter" className='pick_modal'>
        Pick your wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className='d-flex justify-content-center text-white align-items-center gap-4'>
        <img src={metamask} alt="" />
        <h5>Metamask</h5>
       </div>
       <div className='d-flex justify-content-center text-white align-items-center gap-4 mt-4 ms-5'>
        <img src={walletconnect} alt="" />
        <h5>WalletConnect</h5>
       </div>
      </Modal.Body>
      
    </Modal>
    
    </div>
  )
}
