import React,{useEffect, useState} from 'react'
import moment from 'moment';

function Statewise() {
    const [data,setData]= useState([]);
    const [time, settime] = useState('');
    // const getCovidData = async () => {
    //     try{
    //          const res = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
    //          const actualData = await res.json();
    //         setData(actualData.regionData)
    //         settime(moment(actualData.lastUpdatedAtApify).format(' h:mm:ss A'))
    //     }catch(err){
    //          console.log(err);
    //     }
    //  }

const getCovidData = async () => {
    try{
         const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
         const actualData = await res.json();
       setData(actualData.data.regional)
       settime(moment(actualData.lastOriginUpdate).format(' h:mm:ss A'))
    }catch(err){
         console.log(err);
    }
 }

    useEffect(() => {
       getCovidData();
    }, [])

    return (
        <>     
            <div className='container mt-5 mb-5 pb-5'>
                <div className='statewise_main_heading'>
                    <h1 className='text-center text-warning all_states '>All States/UT Stats </h1>
                    <h4 className='text-center last_updated text-warning mt-3 mb-5 '>(Last Updated at {time})</h4>  
                </div>
                <div className='table_responsive mx-lg-5 mx-md-3 mx-sm-2 mt-5 px-lg-5 px-md-3 px-sm-2'>
                    <table className='table table_hover'>
                        <thead className='thead-dark  text-warning'>
                            <tr>
                                <th className='table_heading'>State</th>
                                <th className='table_heading'>Confirmed</th>
                                <th className='table_heading'>Active</th>
                                { // <th className='table_heading d-sm-block d-none'>New Active</th>
                                }<th className='table_heading'>Recovered</th>
                               {// <th className='table_heading'>New Recovered</th>
                                } <th className='table_heading'>Deceased</th>
                            </tr>
                        </thead>
                        <tbody className=' mb-5 text-white scrollResponsive'>
                            {
                                data.map((curElem, ind) =>{
                                    return(
                                        <tr key={ind} className='text-info table_text'>
                                        <td className='table_text'>{curElem.loc}</td>
                                        <td className='table_text'>{curElem.confirmedCasesIndian + curElem.confirmedCasesForeign}</td>
                                        <td className='table_text'>{curElem.totalConfirmed - curElem.discharged - curElem.deaths }</td>
                                      {//  <td className='table_text d-sm-block d-none'>⬆ {curElem.newRecovered+curElem.newInfected}</td>
                                    } <td className='table_text'>{curElem.discharged}</td>
                                      {//  <td className='table_text'>⬆ {curElem.newRecovered}</td>
                                    } <td className='table_text'>{curElem.deaths}</td>
                                        </tr>
                                    )})
                                       }   
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise

    
    