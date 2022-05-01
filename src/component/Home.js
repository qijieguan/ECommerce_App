import './styles/home.css';
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <div className="home">
            <div className="home-intro">
                <div className="intro-text">
                    <h1 className='fade-slide right'> MAKE YOUR DREAM HOME A REALITY</h1> 
                    <h2 className='fade-slide right-delay'>SHOP FOR AFFORDABLE FURNITURES TO FURNISH YOUR HOME</h2>
                </div>
                <Link to="/About"><button className="about-btn">ABOUT ME</button></Link>
            </div>
            <div className="home-background"/>
            <div className='home-body flex'>
                <h1>
                    DISCOVER YOUR <span className='fade-slide up'>DREAM</span> FURNISHINGS <br/>
                    STYLE YOUR HOME TO BRING<span className='fade-slide up'> COZINESS AND COMFORT</span> TO YOUR INDOOR SPACE
                </h1>
            </div>
            <div className="about-content grid">
                <div className="about-title"><h1 className="fade-slide down">More About Us</h1></div>
                <div className="left-wrapper">
                    <div className='fade-slide from-left flex'>
                        <h1>Power of Furnitures</h1>
                        <span>
                            Indoor and outdoor furnishings can influnece your <span> mood </span> 
                            and <span> mind</span>. Furnish your home to fulfill your 
                            <span> inner satisfaction</span>. Achieve your <span>ideal home </span> 
                            to give yourself a sense of <span>comfort</span>.
                        </span>
                    </div>
                </div>
                <div className="right-wrapper flex"><div className='from-right-1'/></div>
                <div className="left-wrapper">
                    <div className='fade-slide from-left flex'>
                        <h1>Become a Client Today</h1>
                        <span>
                            We offer a large variety of furnitures <span> in-store and online</span>. 
                            Many of our furnitures are imported <span> from foreign companies</span>.
                            What you can find are furnitures with <span>special architectures </span>. 
                            We also have non-furnishings in-store.
                        </span>
                    </div>
                </div>
                <div className="right-wrapper flex"><div className='from-right-2'/></div>
                <div className="left-wrapper">
                    <div className='fade-slide from-left flex'>
                        <h1>Follow Us</h1>
                        <span>
                            Follow us on our social media. Enjoy <span> special deals and promotions </span>
                            valid for early shoppers. Keep up with posts demoing<span> sample views </span> 
                            of home designs with our in-store furnitures.
                        </span>
                    </div>
                </div>
                <div className="right-wrapper flex"><div className='from-right-3'/></div>
            </div>
        </div>
    )
}