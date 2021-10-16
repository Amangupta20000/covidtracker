import React from 'react'
import breath from '../Images/breath.png'
import sick from '../Images/sick.png'
import week from '../Images/week.png'
import fever from '../Images//fever.png'
import runnynose from '../Images/runnynose.png'
import cough from '../Images/cough.png'
import Prevention from './Prevention'

function Symptoms() {
    return (
        <>
        <div className="container-fluid text-info  pt-5 pb-5" id="sympid">
        <div className="section_header text-center mb-5 mt-4">
            <h1 className="text-warning all_states">Coronavirus symptoms </h1>
        </div>
    
        <div className="container">
            <div className="row">
                <div className= "col-lg-4 col-md-4 col-6 mt-5 " > 
                    <figure className="text-center">
                        <img alt='...' src={cough} className="img-fluid" width="120" height="120"/>
                        <figcaption > Cough </figcaption>
                    </figure>
                </div>
    
                <div className= "col-lg-4 col-md-4 col-6 mt-5 " > 
                    <figure  className="text-center">
                        <img alt='...' src={runnynose} className="img-fluid" width="120" height="120"/>
                        <figcaption > Runny Nose </figcaption>
                    </figure>
                </div>
    
                <div className= "col-lg-4 col-md-4 col-6 mt-5 " > 
                    <figure  className="text-center">
                        <img alt='...' src={fever} className="img-fluid" width="120" height="120"/>
                        <figcaption > Fever </figcaption>
                    </figure>
                </div>
    
                <div className= "col-lg-4 col-md-4 col-6 mt-5 " > 
                    <figure  className="text-center">
                        <img alt='...' src={sick} className="img-fluid" width="120" height="120"/>
                        <figcaption > Cold </figcaption>
                    </figure>
                </div>
    
                <div className= "col-lg-4 col-md-4 col-6 mt-5 " > 
                    <figure  className="text-center" >
                        <img alt='...' src={week} className="img-fluid" width="120" height="120"/>
                        <figcaption > Tiredness </figcaption>
                    </figure>
                </div>
    
                <div className= "col-lg-4 col-md-4 col-6 mt-5 " > 
                    <figure  className="text-center">
                        <img alt='...' src={breath} className="img-fluid" width="120" height="120"/>
                        <figcaption > Difficulty Breathing (severe cases) </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div> 
    <Prevention/> 
        </>
    )
}

export default Symptoms
