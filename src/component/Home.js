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
                <div id="intro-text">
                    <h1 className='fade-slide'>Welcome To My <span>Ecommerce</span> App</h1> 
                    <span>Post Items Effortlessly To Be Seen On The Webpage</span>
                </div>
                <Link to="/Account"><button id="about-btn">About Me</button></Link>
            </div>
            <div id="home-background"/>
            <div id='home-slide'>
                <h1 className='fade-slide'>
                    The <span>Right</span> Furnatures Can <span>Enrich</span> Your Living Space
                </h1>
            </div>
            <div id="home-content">
                <div className='side-slide' id="slide-text">
                    <h1>What Are The Right Furnatures For You?</h1>
                    <span>
                        Living Space Affects <span>Mood</span> And <span>Mind</span>. 
                        Different Furnatures Are Capable of Shaping Variety Of Homes To 
                        Give The Individual Their <span>Inner Satisfaction</span>. The 
                        Right Furnatures Can Manifest Your <span>Ideal Atmosphere </span> 
                        And Give You A Peace Of Mind.
                    </span>
                </div>
                <div className='side-slide' id="slide-image"/>
            </div>
        </div>
    )
}