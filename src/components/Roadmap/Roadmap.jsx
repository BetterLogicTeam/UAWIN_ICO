import React from 'react'
import './Roadmap.css'
import lft_crnr from '../Assets/uper_yellow.png'
import roadd_ua from '../Assets/road_win.png'
import right_side_ua from '../Assets/road_wright_side_win.png'
// import on_road from '../Assets/way.png'
import launch_title from '../Assets/Launch.png'
import point_one from '../Assets/point_1.png'
import growth_title from '../Assets/Growth.png'
import point_tow from '../Assets/point_2.png'
import Expansion_title from '../Assets/Expansion.png'
import Prosperity_title from '../Assets/Prosperity.png'
import point_three from '../Assets/point_3.png'
import point_four from '../Assets/point_4.png'

function Roadmap() {
  return (
    <div style={{background:"#04101C" , overflow:"hidden"}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title_road_uper d-flex justify-content-between">
                    <>
                        <img src={lft_crnr} alt="" className='corner_left' />
                        </>
                    <div className="title_core">
                        <h2 className='text-white pt-3'>Roadmap</h2>
                        <img src={roadd_ua} alt="" className='' />
                    </div>
                    <img src={right_side_ua} alt="" className='right_side_win' />
                </div>

                <div className="road_main">
                    <div className="launch d-flex gap-4">
                        <img src={launch_title} alt="" className='point_title' />
                        <img src={point_one} alt="" className='point_pin' />
                        <div className='text-start'>
                            <h4 className='list_main_title'>LAUNCH</h4>
                            <ol className='text-start ps-3'>
                                <li className='pin_point_list'>1,000 Holders</li>
                                <li className='pin_point_list'>Website Launch</li>
                                <li className='pin_point_list'>CoinGecko Listing</li>
                                <li className='pin_point_list'>Presale closed.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="growth d-flex gap-4">
                    <div className='text-start'>
                            <h4 className='list_main_title'>Growth</h4>
                            <ol className='text-start ps-3'>
                                <li className='pin_point_list'>1,000 Holders</li>
                                <li className='pin_point_list'>Coinmarketcap listing</li>
                                <li className='pin_point_list'>DEX listing</li>
                            </ol>
                        </div>
                    <img src={growth_title} alt="" className='point_title' />
                    <img src={point_tow} alt="" className='point_pin' />
                        
                    </div>

                    <div className="Expansion d-flex gap-4 ">
                    <img src={Expansion_title} alt="" className='point_title_ex' />
                        <img src={point_three} alt="" className='point_pin' />
                        <div className='text-start'>
                            <h4 className='list_main_title'>Expansion</h4>
                            <ol className='text-start ps-3'>
                                <li className='pin_point_list'>1,000 Holders</li>
                                <li className='pin_point_list'>Initial CEX Listing (WhiteBIT, Hotbit, KuCoin)</li>
                                <li className='pin_point_list'>DEX expansion</li>
                                <li className='pin_point_list'>UAWIN Store (NFT marketplace)</li>
                            </ol>
                        </div>
                    </div>

                    <div className="Prosperity d-flex gap-4">
                    <div className='text-start'>
                            <h4 className='list_main_title'>Prosperity</h4>
                            <ol className='text-start ps-3'>
                                <li className='pin_point_list'>UAWIN Decentralized Exchange</li>
                                <li className='pin_point_list'>UAWIN Merch (Merchandise Store)</li>
                                <li className='pin_point_list'>Influencer Awareness Partnership</li>
                                <li className='pin_point_list'>Top-3 CEX Listings</li>
                            </ol>
                        </div>
                    <img src={Prosperity_title} alt="" className='point_title' />
                    <img src={point_four} alt="" className='point_pin_Prosperity' />
                        
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
