import React from 'react'
import blu_corner from "../Assets/blu_corner.png"
import "./Main_footer.css"
import footer_logo from "../Assets/footer_logo.png"
import fyou from "../Assets/fyou.png"
import finsta from "../Assets/finsta.png"
import ftwi from "../Assets/ftwi.png"
import fface from "../Assets/fface.png"
import yellow_corner from "../Assets/yellow_corner.png"
export default function Main_footer() {
  return (
    <div className='main_footer_bg'>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-2 ps-0 footer_blue_corner_uper ">
            <img src={blu_corner} className='footer_blue_corner' alt="" />
    </div>
    <div className="col-md-8 pt-5 text-center">
        <img src={footer_logo} className='w-25' alt="" />


        <div className='d-flex justify-content-center mt-5 gap-4'>
            <img src={fface} alt="" />
            <img src={ftwi} alt="" />
            <img src={finsta} alt="" />
            <img src={fyou} alt="" />
        </div>
        <div className='footer_text_here'>
            <p> Home</p>
            <p>Why UAWIN</p>
            <p>Tokenomics</p>
            <p> How to get $UAWIN?</p>
            <p> Manifest</p>
            <p> FAQ</p>
        </div>
    </div>
    <div className="col-md-2 text-end pe-0">
        <img src={yellow_corner} className='img_yellow' alt="" />
    </div>

    </div>
    <div className="row justify-content-between py-3" style={{background: '#131E28'}}>

    <div className="col-md-3 text-white">©2023 UAWIN. All Rights Reserved</div>
    <div className="col-md-3 text-white">Terms & conditions  |  Privacy policy</div>
      
    </div>
    </div>
    </div>
  )
}
