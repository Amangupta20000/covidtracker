import React from 'react'
import handwash from '../Images/handwash.png'
import mask from '../Images/mask.png'
import quarantine from '../Images/quarantine.png'
import home from '../Images/home.png'
import medical from '../Images/medical.png'
import news from '../Images/news.png'

function Prevention() {
    return (
        <div className="container-fluid sub_section pt-5 pb-5" id="preventid">
        <div className="section_header text-center mb-5 mt-4">
            <h1 className="text-capitalize text-warning all_states">6 steps Prevention against Coronavirus  </h1>
        </div>
    
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto col-sm-4  col-12 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-3 ">
                            <figure>
                                <img alt='...' src={handwash} className="img-fluid" width="90" height="90"/>
                            </figure>
                        </div>
                        <div className="col-lg-8 col-sm-8 mx-auto col-8">
                            <p className='text-info steps'>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4 mx-auto col-sm-4  col-12 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-3 ">
                            <figure>
                                <img alt='...' src={mask} className="img-fluid" width="90" height="90"/>
                            </figure>
                        </div>
                        <div className="col-lg-8 col-sm-8 mx-auto col-8">
                            <p className='text-info steps'>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</p>
                        </div>
                    </div>
                </div>
    
    
                <div className="col-lg-4 mx-auto col-sm-4  col-12 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-3 ">
                            <figure>
                                <img alt='...' src={quarantine} className="img-fluid" width="90" height="90"/>
                            </figure>
                        </div>
                        <div className="col-lg-8 col-sm-8 mx-auto col-8">
                            <p className='text-info steps'>Avoid close contact (1 meter or 3 feet) with people who are unwell</p>
                        </div>
                    </div>
                </div>
    
    
                <div className="col-lg-4  col-sm-4 mx-auto col-12 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-3 ">
                            <figure>
                                <img alt='...' src={home} className="img-fluid" width="90" height="90"/>
                            </figure>
                        </div>
                        <div className="col-lg-8 col-sm-8 mx-auto col-8">
                            <p className='text-info steps'>Stay home and self-isolate from others in the household if you feel unwell</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4  col-sm-4 mx-auto col-12 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-3 ">
                            <figure>
                                <img alt='...' src={news} className="img-fluid" width="90" height="90"/>
                            </figure>
                        </div>
                        <div className="col-lg-8 col-sm-8 mx-auto col-8">
                            <p className='text-info steps'>Stay informed by watching news & follow the recommended practices</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4  col-sm-4 mx-auto col-12 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-3 ">
                            <figure>
                                <img alt='...' src={medical} className="img-fluid" width="90" height="90"/>
                            </figure>
                        </div>
                        <div className="col-lg-8 col-sm-8 mx-auto col-8">
                            <p className='text-info steps'>If you have fever, cough and difficulty breathing, seek medical care early</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Prevention
