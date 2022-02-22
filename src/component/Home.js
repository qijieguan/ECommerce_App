import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    useEffect(() => { 
        document.getElementById("header").style.background = 'transparent';
        document.getElementById("search").style.display = 'none';
    }, []);
       
    return(
        <div id="home">
            <div id="home-intro">
                <div id="intro">
                    <h1 className='fade-slide'>Welcome To My <span>Ecommerce</span> App</h1> 
                    <span>Post Items Effortlessly To Be Seen On The Webpage</span>
                </div>
                <Link to="/Account"><button id="about-btn">About Me</button></Link>
            </div>
            <div id="home-background"/>
            <div id='home-content'>
                <h1 className='fade-slide'>
                    The <span>Right</span> Furnatures Can <span>Enrich</span> Your Living Space
                </h1>
            </div>
        </div>
    )
}