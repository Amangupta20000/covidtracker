import React from 'react'
import aboutcorona from '../Images/aboutcorona.jpg'

function About() {
    return (
        <div className="container-fluid sub_section pt-md-5 pb-md-5 pt-2 pb-2 " id="aboutid">
	<div className="section_header text-center mb-5 mt-4">
		<h1 className="text-warning all_states">About COVID-19</h1>
	</div>

	<div className="row about_div pt-md-5 pt-2">
		<div className="col-xl-5 col-md-5  col-9 mx-auto ml-5">
			
				<img src={aboutcorona} alt='...' className="img-fluid"/>
			
		</div>

		<div className="col-lg-6 ms-md-5 col-md-6 col-12 mx-auto my-sm-1 mt-5">
				<h2 className="pb-3 about_covid">What is COVID-19 (Corona-Virus)</h2>
				<p className='about_para'>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.
				<br/><br/>Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.
				</p>
			
		</div>
	</div>
</div>
    )
}

export default About
