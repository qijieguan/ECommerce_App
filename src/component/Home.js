import './styles/home.css';
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
                <Link to="/About"><button id="about-btn">About Me</button></Link>
            </div>
            <div id="home-background"/>
            <div id='home-slide'>
                <h1 className='fade-slide'>
                    The <span>Right</span> Furnitures Can <span>Enrich</span> Your Living Space
                </h1>
            </div>
            <div id="home-content">
                <div className='slide-side from-left'>
                    <h1>What Are The Right Furnitures For You?</h1>
                    <span>
                        Living Space Affects <span>Emotion</span> And <span>Mind</span>. 
                        Different Furnitures Are Capable of Decorating Variety Of Homes To 
                        Give Individuals Their <span>Inner Satisfaction</span>. The 
                        Right Furnitures Can Manifest Your <span>Ideal Atmosphere </span> 
                        And Give You A Peace Of Mind.
                    </span>
                </div>
                <div className='slide-side from-right-1'/>
            </div>
            <div id="home-content" style={{borderTop: '0'}}>
                <div className='slide-side from-left'>
                    <h1>What Do We Mostly Sell?</h1>
                    <span>
                        We Specialize In Furnitures. Most Of Our Furnitures Are Imported 
                        <span> From Foreign Countries</span> And Are Limited In Quantity. What 
                        You Can Expect Are Furnitures With <span>Unique Designs</span> That
                        Create Curiosity And Attention.
                    </span>
                </div>
                <div className='slide-side from-right-2'/>
            </div>
        </div>
    )
}