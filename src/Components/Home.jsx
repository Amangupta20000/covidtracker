import React , {useEffect, useState}from 'react'
import moment from 'moment';

function Home() {
    const [data, setdata] = useState([]);
    const [time, settime] = useState('');
    const getCovidData = async () => {
       try{
            const res = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
            const actualData = await res.json();
            setdata(actualData);
            settime(moment(actualData.lastUpdatedAtApify).format('DD-MM-YYYY h:mm:ss A'))
       }catch(err){
            console.log(err);
       }
    }
    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <>
        <section>     
            <ul className='mt-3 row'>
            <li className='card1 col-lg-4 col-sm-6 col-12 mx-auto'>
                <div className='card_animation card_main '>
                <div className='card_inner'>
                <p className='card_name pt-3 text-center'> <span>OUR</span> COUNTRY</p>
                <p className='card_total text-center card_small'> INDIA</p>    
                </div>
                </div>
            </li>
            <li className='card2 col-lg-4 col-sm-6 col-12 mx-auto'>
                <div className='card_animation card_mainC1'>
                <div className='card_inner'>
                <p className='card_name pt-3 text-center'> <span>TOTAL</span> RECOVERED CASES</p>
                <p className='card_total text-center card_small'>{data.recovered}</p>    
                </div>
                </div>
            </li>
            
            <li className='card2 col-lg-4 col-sm-6 col-12 mx-auto'>
                <div className='card_animation card_mainC2'>
                <div className='card_inner'>
                <p className='card_name pt-3 text-center'> <span>TOTAL</span> DECEASED CASES</p>
                <p className='card_total text-center card_small'> {data.deaths}</p>    
                </div>
                </div>
            </li>
            <li className='card2 col-lg-4 col-sm-6 col-12 mx-auto'>
                <div className='card_animation card_mainC4'>
                <div className='card_inner'>
                <p className='card_name pt-3 text-center'> <span>TOTAL</span> ACTIVE CASES</p>
                <p className='card_total text-center card_small'> {data.activeCases}</p>    
                </div>
                </div>
            </li>
            <li className='card2 col-lg-4 col-sm-6 col-12 mx-auto'>
                <div className='card_animation card_mainC3'>
                <div className='card_inner'>
                <p className='card_name pt-3 text-center'> <span>TOTAL</span> CONFIRMED CASES</p>
                <p className='card_total text-center card_small'> {data.totalCases}</p>    
                </div>
                </div>
            </li>
            <li className='card2 col-lg-4 col-sm-6 col-12 mx-auto'>
                <div className='card_animation card_mainC5'>
                <div className='card_inner'>
                <p className='card_name pt-3 text-center'> <span>LAST</span> UPDATED</p>
                <p className='card_total text-center px-5 card_small'> {time}</p>    
                </div>
                </div>
            </li>
        </ul>
        
        </section>
        
            </>
    )
}

export default Home
