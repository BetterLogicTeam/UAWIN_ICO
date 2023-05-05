import React from 'react'
import "./How_get.css"
import v from "../Assets/v.png"
import car from "../Assets/car.png"
import Connect_wallet from '../Connect_wallet/Connect_wallet';

export default function How_get() {

    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='main_how_to_get'>
    <div className='text-end'>
        <img src={v} alt="" />
    </div>
    <div className="container">
    <h1 className='text-white text-bold text-center '>How to get <span className='uawin'> $UAWIN? </span></h1>
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
                <img src={car} className='w-100' alt="" />
            </div>
            <div className="col-md-6 text-white">
                <h1 className='text-white text-bold text-start'>Connect Wallet</h1>
                <p>1.On Google Chrome, visit metamask.io to download the extension and set up a wallet. Or use WalletConnect. Both by selecting “Connect Wallet”</p>
           <p>2.Acquire Ethereum or transfer it to your wallet address from another wallet (e.g. Coinbase or Binance).</p>
         <p>3.Click Connect Wallet, enter the amount of $ETH you would like to swap for $UAWIN and then Swap.</p>
           
           <button className='cooncet_wallate' onClick={() => setModalShow(true)}>Connect Wallet</button>
           <Connect_wallet
           
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
           
            </div>
        </div>
    </div>

    </div>
  )
}
