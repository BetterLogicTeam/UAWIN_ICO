import React from 'react'
import "./Mainifest.css"
import mani from "../Assets/mani.png"

export default function Mainifest() {
  return (
    <div className='main_main_bg' id='Manifest'>
    <div className="container">
    <div className="row align-items-center justify-content-center">
        <div className="col-md-6 main_para_heading" data-aos="fade-right" data-aos-duration="2000">
            <h3 className='main_maini_heading text-start'>Manifest</h3>
            <p className='meni mt-4'>Introducing Ukraine Victory Coin (UAWIN), a crypto token that represents the inevitable event of Ukraine's victory in the war with Russia. Created on Binance Smart Chain, our token offers a unique opportunity to invest in a significant social and political event that is certain to happen.</p>
       <p className='meni'>Investing in UAWIN not only presents a good investment opportunity but also contributes to a worthy cause. A portion of the revenue generated from our token will be donated to charity organizations in Ukraine. Holders will also be rewarded with 1% of every user transaction.</p>
      <p className='meni'>UAWIN token has a limited supply, and over time, it will be burned, creating scarcity and increasing its value. As the victory becomes more likely, the value of our token is expected to increase, creating a unique investment opportunity for holders.</p>
       <p className='meni'>By investing in UAWIN, you'll be part of a growing community of holders who are investing in an important event. The demand for tokens that represent important social and political events is rapidly growing, and UAWIN token has significant growth potential.</p>
       <p className='meni'>Join us today and invest in UAWIN to make a difference. By doing so, you'll not only have the opportunity to earn good returns, but you'll also contribute to a worthy cause and be part of a significant event that the whole world is waiting for.</p>
       <hr className='w-25' />
       <p className='meni'>Victory that will change it all forever.</p>
        </div>
        <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-left" data-aos-duration="2000">
            <img src={mani} alt="" className='w-100' />
        </div>
        </div>
    </div>
    </div>
  )
}
