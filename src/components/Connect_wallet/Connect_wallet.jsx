import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import metamask from "../Assets/metamask.png"
import walletconnect from "../Assets/walletconnect.png"
import { useDispatch } from 'react-redux';
import { connectWalletAction } from '../../store/actions/login';

export default function Connect_wallet(props) {
  const dispatch = useDispatch();
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
       <div className='d-flex justify-content-center text-white align-items-center gap-4'    style={{cursor:"pointer"}}  onClick={()=>(dispatch(connectWalletAction(2)),props.onHide())}>
        <img src={metamask} alt="" />
        <h5>Metamask</h5>
       </div>
       <div className='d-flex justify-content-center text-white align-items-center gap-4 mt-4 ms-5'    style={{cursor:"pointer"}} onClick={()=>(dispatch(connectWalletAction(1)),props.onHide())}>
        <img src={walletconnect} alt="" />
        <h5>WalletConnect</h5>
       </div>
      </Modal.Body>
      
    </Modal>
    
    </div>
  )
}
