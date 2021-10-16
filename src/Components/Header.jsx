import React from 'react'
import eksath from '../Images/eksath.png'
import corona from '../Images/corona.png'

function Header() {
    return (
        <div className='main_header'>
        <h1 className='text-center liveAnimation '>🔴 LIVE</h1>
        <h2 className='text-center main_title mt-4 pt-5 mb-5'>Covid-19 Coronavirus Tracker</h2>
            <div className="row w-100 h-100 row_style">
                <div className="col-lg-5 col-md-5 col-5 order-lg-1 order-2 " >
                    <div className="leftside w-100 h-100 d-flex justify-content-center align-items-center eksath_anime">
                        <img src={eksath} alt='...' className='header_img' />
                    </div>
                </div>

                <div className="col-lg-7 col-md-7 col-7 order-1 order-lg-2 " >
                    <div className="rightside  w-100 h-100 d-flex justify-content-center align-items-center text-left">
                    <h1 className='header_title'>Let's Stay Safe & Fight Together <br/> Against Cor<span className="corona_anime"><img src={corona} className='corona_img' alt='...'/></span>na Virus</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
