import './styles/home.css';
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <div id="home">
        <div id="home-intro">
            <div id="intro-text">
                <h1 className='fade-slide'> <span>Invest</span> and <span> Save</span> Now</h1> 
                <span>Buy a variety of high quality furnitures to furnish your home</span>
            </div>
            <Link to="/About"><button id="about-btn">About Me</button></Link>
        </div>
        <div id="home-background"/>
        <div id='home-slide'>
            <h1 className='fade-slide'>
                Buy Your <span>Dream</span> Furnitures To <span>Furnish</span> Your Living Space
            </h1>
        </div>
        <div id="about-content">
            <div id="about-title">
                <h1 className="fade-slide">More About Us</h1>
            </div>
            <div id="left-wrapper">
                <div className='slide-side from-left'>
                    <h1>Values Of Furnitures</h1>
                    <span>
                        Your Living Space Can Influence Your <span> Emotion</span> And 
                        <span> Mind</span> On A Daily Basis. Furnish Your Home To Fulfill Your 
                        <span> Inner Satisfaction</span>. Furnitures Can Achieve Your 
                        <span>Ideal Home </span> And Give You A <span>Peace </span>Of Mind.
                    </span>
                </div>
            </div>
            <div id="right-wrapper">
                <div className='from-right-1'/>  
            </div>
            <div id="left-wrapper">
                <div className='slide-side from-left'>
                    <h1>Become A Client Today</h1>
                    <span>
                        We Offer A Large Variety Of Furnitures <span> In-Store and Online</span>. 
                        Most Of Our Furnitures Are Imported <span> From Foreign Companies</span>.
                        What You Can Find Are Furnitures With <span>Unique Designs </span> 
                        That Draw Curiosity And Attention. We Also Have Other Products In-Store.
                    </span>
                </div>
            </div>
            <div id="right-wrapper">
                <div className='from-right-2'/>  
            </div>
            </div>
        </div>
    )
}