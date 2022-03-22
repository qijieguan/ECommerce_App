import './styles/home.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    useEffect(() => { 
        document.getElementById("header").style.background = 'transparent';
        document.getElementById("search-bar").style.display = 'none';
        document.getElementById("search-btn").style.display = 'none';
    }, []);
       
    return(
        <div id="home">
            <div id="home-intro">
                <div id="intro-text">
                    <h1 className='fade-slide'> <span>Invest</span> and <span> Save</span> Now</h1> 
                    <span>Buy a variety of high quality furnitures to change your home</span>
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
                    <h1>Effects Of Furnitures</h1>
                    <span>
                        Your Living Space Can Influence Your <span>Emotion</span> And 
                        <span> Mind</span> On A Daily Basis. Furnitures Are 
                        Capable Of Changing Your Home To Give You <span>Inner Satisfaction</span>.
                        The Right Furnitures Can Create Your <span>Ideal Atmosphere </span> 
                        And Give You A Peace Of Mind.
                    </span>
                </div>
                <div className='slide-side from-right-1'/>
            </div>
            <div id="home-content" style={{borderTop: '0'}}>
                <div className='slide-side from-left'>
                    <h1>We Have The Right Furnitures For You</h1>
                    <span>
                        We Sell A Large Variety Of Furnitures. Many Of Our Furnitures Are 
                        Imported <span> From Foreign Places</span> And Are Limited In Quantity. 
                        What You Can Find Are Furnitures With <span>Unique Designs</span> That
                        Draw Curiosity And Attention.
                    </span>
                </div>
                <div className='slide-side from-right-2'/>
            </div>
        </div>
    )
}